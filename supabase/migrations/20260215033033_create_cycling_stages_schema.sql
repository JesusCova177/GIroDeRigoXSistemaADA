/*
  # Cycling Stages App Schema

  ## Overview
  Creates the database structure for a cycling-inspired progressive web app where users
  advance through stages with various challenges and activities.

  ## New Tables
  
  ### `stages`
  Represents individual stages in the cycling journey
  - `id` (uuid, primary key) - Unique identifier for each stage
  - `stage_number` (integer, not null) - Sequential stage number (1, 2, 3, etc.)
  - `title` (text, not null) - Display title (e.g., "Stage 1")
  - `description` (text) - Optional description of the stage
  - `primary_color` (text, default '#0066cc') - Main color for the stage theme
  - `accent_color` (text, default '#ffcc00') - Accent color for visual elements
  - `created_at` (timestamptz) - Timestamp of creation
  
  ### `challenges`
  Stores challenge cards for each stage (checklists, reflections, etc.)
  - `id` (uuid, primary key) - Unique identifier for each challenge
  - `stage_id` (uuid, foreign key) - References the stage this challenge belongs to
  - `type` (text, not null) - Type of challenge ('checklist' or 'reflection')
  - `title` (text, not null) - Challenge card title
  - `content` (jsonb, not null) - Challenge content (array of items for checklist, questions for reflection)
  - `order_index` (integer, default 0) - Order of the card in the carousel
  - `created_at` (timestamptz) - Timestamp of creation

  ### `user_progress`
  Tracks user completion of challenges
  - `id` (uuid, primary key) - Unique identifier
  - `user_id` (uuid, not null) - References auth.users
  - `challenge_id` (uuid, foreign key) - References the challenge
  - `completed_items` (jsonb, default '[]') - Array of completed item indices or IDs
  - `completed_at` (timestamptz) - When the challenge was fully completed
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for stages and challenges (app content)
  - Authenticated users can manage their own progress
*/

-- Create stages table
CREATE TABLE IF NOT EXISTS stages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stage_number integer NOT NULL UNIQUE,
  title text NOT NULL,
  description text,
  primary_color text DEFAULT '#0066cc',
  accent_color text DEFAULT '#ffcc00',
  created_at timestamptz DEFAULT now()
);

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stage_id uuid NOT NULL REFERENCES stages(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('checklist', 'reflection')),
  title text NOT NULL,
  content jsonb NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create user progress table
CREATE TABLE IF NOT EXISTS user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  challenge_id uuid NOT NULL REFERENCES challenges(id) ON DELETE CASCADE,
  completed_items jsonb DEFAULT '[]',
  completed_at timestamptz,
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id, challenge_id)
);

-- Enable RLS
ALTER TABLE stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- Stages policies (public read)
CREATE POLICY "Anyone can view stages"
  ON stages FOR SELECT
  USING (true);

-- Challenges policies (public read)
CREATE POLICY "Anyone can view challenges"
  ON challenges FOR SELECT
  USING (true);

-- User progress policies (authenticated users manage their own)
CREATE POLICY "Users can view own progress"
  ON user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress"
  ON user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress"
  ON user_progress FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_challenges_stage_id ON challenges(stage_id);
CREATE INDEX IF NOT EXISTS idx_challenges_order ON challenges(stage_id, order_index);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_challenge_id ON user_progress(challenge_id);