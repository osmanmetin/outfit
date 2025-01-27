
import { createClient } from '@supabase/supabase-js'


console.log('process.env.REACT_APP_SUPABASE_URL', process.env.REACT_APP_SUPABASE_URL)

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_API_KEY
const supabase = createClient(supabaseUrl as string, supabaseKey as string)

export default supabase