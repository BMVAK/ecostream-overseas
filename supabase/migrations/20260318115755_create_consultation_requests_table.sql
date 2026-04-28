/*
  # Create consultation requests table

  1. New Tables
    - `consultation_requests`
      - `id` (uuid, primary key) - Unique identifier for each consultation request
      - `first_name` (text, required) - First name of the person requesting consultation
      - `last_name` (text, optional) - Last name of the person
      - `email` (text, optional) - Email address for contact
      - `phone` (text, required) - Phone number (mandatory field)
      - `message` (text, optional) - Additional message or details from the user
      - `created_at` (timestamptz) - Timestamp when the request was submitted
      - `status` (text, default 'pending') - Status of the consultation request
  
  2. Security
    - Enable RLS on `consultation_requests` table
    - Add policy for anonymous users to insert their own consultation requests
    - Add policy for authenticated admin users to view all requests
  
  3. Indexes
    - Add index on created_at for efficient sorting
    - Add index on status for filtering
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text DEFAULT '',
  email text DEFAULT '',
  phone text NOT NULL,
  message text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit consultation requests"
  ON consultation_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all consultation requests"
  ON consultation_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at 
  ON consultation_requests(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_consultation_requests_status 
  ON consultation_requests(status);
