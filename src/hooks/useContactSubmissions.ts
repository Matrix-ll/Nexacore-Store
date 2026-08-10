import { useTable } from './useTable'
import type { Database } from '@/types/database'

type ContactSubmissionsRow = Database['public']['Tables']['contact_submissions']['Row']
type ContactSubmissionsInsert = Database['public']['Tables']['contact_submissions']['Insert']

export function useContactSubmissions() {
  return useTable<ContactSubmissionsRow, ContactSubmissionsInsert>('contact_submissions')
}
