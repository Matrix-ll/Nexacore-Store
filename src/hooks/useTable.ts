import { useState, useCallback, useRef, useEffect } from 'react'
import { supabase, supabaseSchema } from '@/lib/supabase'

// Explicit per-query schema binding — ensures PostgREST always receives
// the correct Content-Profile header regardless of client-level config.
const db = supabase.schema(supabaseSchema)

export function useTable<T extends { id: string }, TInsert = Omit<T, 'id' | 'created_at' | 'updated_at'>>(tableName: string) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fetchingRef = useRef(false)

  const insert = useCallback(async (row: TInsert): Promise<TInsert | null> => {
    setLoading(true)
    setError(null)
    try {
      const { error: err } = await db
        .from(tableName)
        .insert(row as Record<string, unknown>)

      if (err) throw err
      return row
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'An error occurred'
      setError(msg)
      return null
    } finally {
      setLoading(false)
    }
  }, [tableName])

  const update = useCallback(async (id: string, row: Partial<T>): Promise<(Partial<T> & { id: string }) | null> => {
    setLoading(true)
    setError(null)
    try {
      const { error: err } = await db
        .from(tableName)
        .update(row as Record<string, unknown>)
        .eq('id', id)

      if (err) throw err
      return { id, ...row }
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'An error occurred'
      setError(msg)
      return null
    } finally {
      setLoading(false)
    }
  }, [tableName])

  const remove = useCallback(async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      const { error: err } = await db
        .from(tableName)
        .delete()
        .eq('id', id)

      if (err) throw err
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'An error occurred'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }, [tableName])

  const fetchAll = useCallback(async (filters?: Record<string, any>) => {
    if (fetchingRef.current) return data
    fetchingRef.current = true
    setLoading(true)
    setError(null)
    try {
      let query = db.from(tableName).select('*')

      if (filters) {
        Object.entries(filters).forEach(([key, value]) => {
          query = query.eq(key, value)
        })
      }

      const { data: rows, error: err } = await query.order('created_at', { ascending: false })
      if (err) throw err
      const result = (rows ?? []) as T[]
      setData(result)
      return result
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'An error occurred'
      setError(msg)
      return [] as T[]
    } finally {
      setLoading(false)
      fetchingRef.current = false
    }
  }, [tableName])

  const fetchById = useCallback(async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      const { data: row, error: err } = await db
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single()

      if (err) throw err
      return row as T
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'An error occurred'
      setError(msg)
      return null
    } finally {
      setLoading(false)
    }
  }, [tableName])

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  return { data, insert, update, remove, fetchAll, fetchById, loading, error }
}
