import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, HelpCircle, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FAQ {
  question: string;
  answer: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

const faqs: FAQ[] = [
  {
    question: "What services does EcoStream Overseas offer?",
    answer: "We provide comprehensive study abroad services including university selection, application assistance, visa guidance, pre-departure support, and post-arrival assistance."
  },
  {
    question: "Which countries do you help students apply to?",
    answer: "We specialize in USA, UK, Australia, Cyprus, France, and Malta, offering personalized guidance for each destination."
  },
  {
    question: "How long does the application process take?",
    answer: "The process typically takes 3-6 months depending on the country and university. We recommend starting at least 6-8 months before your intended start date."
  },
  {
    question: "What are the costs involved?",
    answer: "Costs vary by destination and include tuition fees, visa fees, accommodation, and living expenses. Book a free consultation for detailed cost breakdown specific to your chosen destination."
  },
  {
    question: "Do you help with scholarships?",
    answer: "Yes! We provide comprehensive scholarship guidance and help identify suitable funding opportunities based on your academic profile and destination."
  },
  {
    question: "What documents are required?",
    answer: "Common documents include academic transcripts, test scores (IELTS/TOEFL/GRE/GMAT), passport, financial documents, and letters of recommendation. Requirements vary by country and university."
  },
  {
    question: "Do you provide visa assistance?",
    answer: "Absolutely! We offer complete visa guidance including document preparation, interview coaching, and application submission support."
  },
  {
    question: "Is the consultation really free?",
    answer: "Yes! Our initial consultation is completely free with no obligations. We'll assess your profile and provide personalized recommendations."
  }
];

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'menu' | 'faq' | 'chat'>('menu');
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [userInfo, setUserInfo] = useState({ name: '', phone: '' });
  const [showUserForm, setShowUserForm] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "918019891808";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!sessionId) return;

    const loadChatHistory = async () => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (data && !error) {
        const loadedMessages: Message[] = data.map(msg => ({
          id: msg.id,
          text: msg.message,
          sender: msg.sender as 'user' | 'agent',
          timestamp: new Date(msg.created_at)
        }));
        setMessages(loadedMessages);
      }
    };

    loadChatHistory();

    const channel = supabase
      .channel('chat_messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`
        },
        (payload) => {
          const newMessage: Message = {
            id: payload.new.id,
            text: payload.new.message,
            sender: payload.new.sender as 'user' | 'agent',
            timestamp: new Date(payload.new.created_at)
          };
          setMessages(prev => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const handleClose = () => {
    setIsOpen(false);
    setView('menu');
    setSelectedFAQ(null);
    setMessages([]);
    setShowUserForm(true);
  };

  const handleFAQClick = (faq: FAQ) => {
    setSelectedFAQ(faq);
  };

  const handleStartChat = () => {
    setView('chat');
  };

  const handleUserInfoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.phone) {
      setIsLoading(true);

      const { data, error } = await supabase
        .from('chat_sessions')
        .insert([
          {
            user_name: userInfo.name,
            user_phone: userInfo.phone,
            status: 'active'
          }
        ])
        .select()
        .single();

      if (data && !error) {
        setSessionId(data.id);
        setShowUserForm(false);

        await supabase.from('chat_messages').insert([
          {
            session_id: data.id,
            sender: 'agent',
            message: `Hello ${userInfo.name}! Welcome to EcoStream Overseas. How can I help you with your study abroad journey today?`
          }
        ]);

        const whatsappMessage = `New chat started!%0A%0AName: ${userInfo.name}%0APhone: ${userInfo.phone}%0ASession ID: ${data.id}%0A%0AReply to this chat session at: ${window.location.origin}`;
        const whatsappNotification = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappNotification, '_blank');
      }

      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !sessionId || isLoading) return;

    const message = inputValue.trim();
    setInputValue('');
    setIsLoading(true);

    const { error } = await supabase.from('chat_messages').insert([
      {
        session_id: sessionId,
        sender: 'user',
        message: message
      }
    ]);

    if (!error) {
      const whatsappMessage = `New message from ${userInfo.name}:%0A%0A${encodeURIComponent(message)}%0A%0ASession: ${sessionId}`;
      const whatsappNotification = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      setTimeout(() => {
        window.open(whatsappNotification, '_blank');
      }, 300);
    }

    setIsLoading(false);
  };

  const handleDirectWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Open Chat"
          >
            <MessageCircle size={28} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              !
            </span>
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-96 max-w-[calc(100vw-3rem)] flex flex-col max-h-[600px]">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {view !== 'menu' && (
                  <button
                    onClick={() => {
                      if (view === 'faq' && selectedFAQ) {
                        setSelectedFAQ(null);
                      } else {
                        setView('menu');
                        setSelectedFAQ(null);
                      }
                    }}
                    className="hover:bg-green-700 rounded-full p-1 transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <div className="bg-white rounded-full p-2">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">EcoStream Support</h3>
                  <p className="text-xs text-green-100">Online • Ready to help!</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="hover:bg-green-700 rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {view === 'menu' && (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-800 font-semibold mb-2">👋 Welcome to EcoStream Overseas!</p>
                    <p className="text-sm text-gray-600">
                      We're here to help with your study abroad journey. Choose an option below:
                    </p>
                  </div>

                  <button
                    onClick={() => setView('faq')}
                    className="w-full bg-white hover:bg-green-50 p-4 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 transition-all text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="text-green-600" size={24} />
                      <div>
                        <p className="font-semibold text-gray-900">View FAQs</p>
                        <p className="text-sm text-gray-600">Common questions answered</p>
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={handleDirectWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <MessageCircle size={20} />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              )}

              {view === 'faq' && !selectedFAQ && (
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                      <HelpCircle size={18} className="text-green-600" />
                      <span>Frequently Asked Questions</span>
                    </h4>
                    <div className="space-y-2">
                      {faqs.map((faq, index) => (
                        <button
                          key={index}
                          onClick={() => handleFAQClick(faq)}
                          className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors text-sm text-gray-700 hover:text-green-700 border border-gray-200 hover:border-green-300"
                        >
                          {faq.question}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleDirectWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <MessageCircle size={20} />
                    <span>Still have questions? Chat on WhatsApp</span>
                  </button>
                </div>
              )}

              {view === 'faq' && selectedFAQ && (
                <div className="space-y-3">
                  <div className="bg-green-100 rounded-lg p-4 ml-auto max-w-[85%]">
                    <p className="text-sm text-gray-800 font-semibold">{selectedFAQ.question}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm max-w-[85%]">
                    <p className="text-sm text-gray-700">{selectedFAQ.answer}</p>
                  </div>
                  <button
                    onClick={handleDirectWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={16} />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>
              )}

              {view === 'chat' && showUserForm && (
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4">Before we start...</h4>
                  <form onSubmit={handleUserInfoSubmit} className="space-y-3">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? 'Starting...' : 'Start Chat'}
                    </button>
                  </form>
                </div>
              )}

              {view === 'chat' && !showUserForm && (
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-green-600 text-white'
                            : 'bg-white shadow-sm text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Chat Input */}
            {view === 'chat' && !showUserForm && (
              <div className="p-3 bg-white border-t border-gray-200 rounded-b-2xl">
                <form onSubmit={handleSendMessage} className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            )}

            {/* Footer */}
            {view !== 'chat' && (
              <div className="p-3 bg-white border-t border-gray-200 rounded-b-2xl">
                <p className="text-xs text-gray-500 text-center">
                  Available 24/7 • Quick Response Guaranteed
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
