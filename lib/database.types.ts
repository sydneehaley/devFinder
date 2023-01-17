export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      jobs: {
        Row: {
          company: string | null
          createdOn: string
          index: number
          job_id: string
          link: string | null
          location: string | null
          shift: string | null
          title: string | null
        }
        Insert: {
          company?: string | null
          createdOn?: string
          index: number
          job_id: string
          link?: string | null
          location?: string | null
          shift?: string | null
          title?: string | null
        }
        Update: {
          company?: string | null
          createdOn?: string
          index?: number
          job_id?: string
          link?: string | null
          location?: string | null
          shift?: string | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

