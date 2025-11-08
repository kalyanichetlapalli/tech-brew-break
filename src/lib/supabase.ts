// Import the auto-generated Supabase client
// This client is pre-configured with the correct environment variables
import { supabase } from '@/integrations/supabase/client'

export { supabase }

// Auth helper functions
export const auth = {
  signUp: async (email: string, password: string) => {
    return await supabase.auth.signUp({ email, password })
  },
  
  signIn: async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password })
  },
  
  signOut: async () => {
    return await supabase.auth.signOut()
  },
  
  getCurrentUser: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  },
  
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback)
  }
}

// Database helper functions
export const db = {
  // Example: Get user profile
  getUserProfile: async (userId: string) => {
    return await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
  },
  
  // Example: Update user profile
  updateUserProfile: async (userId: string, updates: any) => {
    return await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId)
  },
  
  // Example: Get user scores/progress
  getUserScores: async (userId: string) => {
    return await supabase
      .from('user_scores')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
  },
  
  // Example: Save game score
  saveGameScore: async (userId: string, gameType: string, score: number) => {
    return await supabase
      .from('user_scores')
      .insert([
        { user_id: userId, game_type: gameType, score, created_at: new Date().toISOString() }
      ])
  }
}