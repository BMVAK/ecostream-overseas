/*
  # Create chat messages table

  1. New Tables
    - `chat_messages`
      - `id` (uuid, primary key) - Unique identifier for each chat message
      - `name` (text, required) - Name of the user sending the message
      - `phone` (text, required) - Phone number of the user
      - `message` (text, required) - The actual message content
      - `created_at` (timestamptz) - Timestamp when the message was sent
      - `status` (text, default 'unread') - Status of the message (unread/read/replied)
  
  2. Security
    - Enable RLS on `chat_messages` table
    - Add policy for anonymous users to insert their messages
    - Add policy for authenticated users to view all messages
  
  3. Indexes
    - Add index on created_at for efficient sorting
    - Add index on status for filtering
    - Add index on phone for quick lookup
*/

CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send chat messages"
  ON chat_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all chat messages"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at 
  ON chat_messages(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_chat_messages_status 
  ON chat_messages(status);

CREATE INDEX IF NOT EXISTS idx_chat_messages_phone 
  ON chat_messages(phone);
