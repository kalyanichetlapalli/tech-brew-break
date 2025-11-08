import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cmfmwfjkkudasmwjqeyy.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZm13Zmpra3VkYXNtd2pxZXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNTUyNzcsImV4cCI6MjA3NzgzMTI3N30.28ChHAGoFrJPgKFj1DT0nmOmuyQD2-JYXnouX76xHZs'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})

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