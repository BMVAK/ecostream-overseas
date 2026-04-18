/*
  # Real-time Chat System

  1. Changes
    - Drop existing chat_messages table
    - Create new chat_sessions table for managing chat sessions
    - Create new chat_messages table with proper structure for real-time bidirectional chat
    
  2. New Tables
    - `chat_sessions`
      - `id` (uuid, primary key)
      - `user_name` (text)
      - `user_phone` (text)
      - `status` (text) - 'active' or 'closed'
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `chat_messages`
      - `id` (uuid, primary key)
      - `session_id` (uuid, foreign key to chat_sessions)
      - `sender` (text) - 'user' or 'agent'
      - `message` (text)
      - `whatsapp_id` (text, nullable) - WhatsApp message ID for tracking
      - `created_at` (timestamptz)

  3. Security
    - Enable RLS on both tables
    - Public can create and read chat sessions and messages
    - This allows the website chat to work without authentication

  4. Real-time
    - Enable real-time for chat_messages table so users see agent replies instantly
*/

-- Drop existing chat_messages table
DROP TABLE IF EXISTS chat_messages CASCADE;

-- Create chat_sessions table
CREATE TABLE IF NOT EXISTS chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_name text NOT NULL,
  user_phone text NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create chat_messages table with proper structure
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES chat_sessions(id) ON DELETE CASCADE,
  sender text NOT NULL CHECK (sender IN ('user', 'agent')),
  message text NOT NULL,
  whatsapp_id text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policies for chat_sessions
CREATE POLICY "Anyone can create chat sessions"
  ON chat_sessions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read chat sessions"
  ON chat_sessions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can update chat sessions"
  ON chat_sessions FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for chat_messages
CREATE POLICY "Anyone can create chat messages"
  ON chat_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read chat messages"
  ON chat_messages FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON chat_messages(created_at);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_status ON chat_sessions(status);

-- Enable realtime for chat_messages
ALTER PUBLICATION supabase_realtime ADD TABLE chat_messages;