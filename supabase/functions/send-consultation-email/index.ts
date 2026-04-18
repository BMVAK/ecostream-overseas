import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ConsultationRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
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
    const { firstName, lastName, email, phone, message }: ConsultationRequest = await req.json();

    const adminEmail = "ecostreamoverseas@gmail.com";
    const fullName = `${firstName} ${lastName || ''}`.trim();
    const displayName = fullName || firstName;

    const subject = `New Consultation: ${displayName} - ${phone}`;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #2563eb; }
    .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #2563eb; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Consultation Request</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name:</div>
        <div class="value">${displayName}</div>
      </div>
      <div class="field">
        <div class="label">Phone:</div>
        <div class="value"><a href="tel:${phone}">${phone}</a></div>
      </div>
      <div class="field">
        <div class="label">Email:</div>
        <div class="value">${email ? `<a href="mailto:${email}">${email}</a>` : 'Not provided'}</div>
      </div>
      <div class="field">
        <div class="label">Message:</div>
        <div class="value">${message || 'No message provided'}</div>
      </div>
      <div class="footer">
        Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}<br>
        This is an automated notification from Ecostream Overseas consultation form.
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (!RESEND_API_KEY) {
      console.warn('Resend API key not configured - email will not be sent');
      console.log('Consultation details:', { name: displayName, phone, email, message });

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Consultation request received (email service not configured)',
          note: 'Configure RESEND_API_KEY to enable email notifications'
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    try {
      const resend = new Resend(RESEND_API_KEY);

      // Use the verified domain email as the sender
      const fromEmail = 'Ecostream Overseas <noreply@ecostreamoverseas.com>';

      const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [adminEmail],
        reply_to: 'ecostreamoverseas@gmail.com',
        subject: subject,
        html: emailHtml,
      });

      if (error) {
        console.error('Resend API error details:', error);
        throw new Error(`Resend API error: ${JSON.stringify(error)}`);
      }

      console.log('Email sent successfully via Resend:', data);

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Consultation request received and email sent',
          emailId: data?.id
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (emailError) {
      console.error('Failed to send email:', emailError);

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Consultation request received (email delivery failed)',
          emailError: emailError instanceof Error ? emailError.message : 'Unknown email error',
          note: 'Please verify your domain in Resend dashboard at resend.com/domains'
        }),
        {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error) {
    console.error('Error processing consultation request:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
