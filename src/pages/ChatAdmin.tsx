import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Send, MessageCircle, User, Phone } from 'lucide-react';

interface ChatSession {
  id: string;
  user_name: string;
  user_phone: string;
  status: string;
  created_at: string;
  updated_at: string;
  lastMessage?: string;
  unreadCount?: number;
}

interface ChatMessage {
  id: string;
  session_id: string;
  sender: 'user' | 'agent';
  message: string;
  created_at: string;
}

export default function ChatAdmin() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyText, setReplyText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadSessions();
  }, []);

  useEffect(() => {
    if (!selectedSession) return;

    loadMessages(selectedSession.id);

    const channel = supabase
      .channel(`chat_session_${selectedSession.id}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${selectedSession.id}`
        },
        (payload) => {
          const newMessage = payload.new as ChatMessage;
          setMessages(prev => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedSession]);

  const loadSessions = async () => {
    const { data, error } = await supabase
      .from('chat_sessions')
      .select('*')
      .order('updated_at', { ascending: false });

    if (data && !error) {
      setSessions(data);
    }
  };

  const loadMessages = async (sessionId: string) => {
    const { data, error } = await supabase
      .from('chat_messages')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    if (data && !error) {
      setMessages(data);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedSession || isLoading) return;

    setIsLoading(true);
    const message = replyText.trim();
    setReplyText('');

    const { error } = await supabase.from('chat_messages').insert([
      {
        session_id: selectedSession.id,
        sender: 'agent',
        message: message
      }
    ]);

    if (!error) {
      await supabase
        .from('chat_sessions')
        .update({ updated_at: new Date().toISOString() })
        .eq('id', selectedSession.id);

      loadSessions();
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 text-white p-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <MessageCircle size={28} />
              Chat Admin Panel
            </h1>
            <p className="text-green-100 text-sm mt-1">
              Manage customer conversations in real-time
            </p>
          </div>

          <div className="flex h-[calc(100vh-12rem)]">
            <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="font-semibold text-gray-700">Chat Sessions</h2>
              </div>
              {sessions.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No chat sessions yet
                </div>
              ) : (
                sessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => setSelectedSession(session)}
                    className={`w-full p-4 border-b border-gray-200 hover:bg-gray-50 text-left transition-colors ${
                      selectedSession?.id === session.id ? 'bg-green-50 border-l-4 border-l-green-600' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <User size={16} className="text-gray-600" />
                          <p className="font-semibold text-gray-900">{session.user_name}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Phone size={14} className="text-gray-500" />
                          <p className="text-sm text-gray-600">{session.user_phone}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(session.created_at).toLocaleString()}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          session.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {session.status}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            <div className="flex-1 flex flex-col">
              {selectedSession ? (
                <>
                  <div className="p-4 bg-gray-50 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">{selectedSession.user_name}</h3>
                    <p className="text-sm text-gray-600">{selectedSession.user_phone}</p>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            msg.sender === 'agent'
                              ? 'bg-green-600 text-white'
                              : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p
                            className={`text-xs mt-1 ${
                              msg.sender === 'agent' ? 'text-green-100' : 'text-gray-500'
                            }`}
                          >
                            {new Date(msg.created_at).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-white border-t border-gray-200">
                    <form onSubmit={handleSendReply} className="flex gap-2">
                      <input
                        type="text"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Type your reply..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        disabled={isLoading}
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !replyText.trim()}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send size={18} />
                        Send
                      </button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MessageCircle size={64} className="mx-auto mb-4 text-gray-300" />
                    <p>Select a chat session to view messages</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
