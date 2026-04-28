import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ChatMessage {
  sessionId: string;
  userName: string;
  userPhone: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { sessionId, userName, userPhone, message }: ChatMessage = await req.json();

    // For now, we'll create a WhatsApp link that opens with the message
    // In production, you would integrate with WhatsApp Business API
    const whatsappNumber = "916301636037";
    const whatsappMessage = `New chat message from ${userName} (${userPhone}):%0A%0A${encodeURIComponent(message)}%0A%0ASession ID: ${sessionId}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    console.log(`Chat message from ${userName}: ${message}`);
    console.log(`WhatsApp notification link: ${whatsappLink}`);

    // Note: For full WhatsApp Business API integration, you would need:
    // 1. WhatsApp Business API credentials
    // 2. A webhook to receive incoming messages
    // 3. API calls to send messages programmatically

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message logged. For full integration, WhatsApp Business API credentials are needed.",
        whatsappLink,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
