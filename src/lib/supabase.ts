import { createClient } from '@supabase/supabase-js';

// Ces valeurs sont volontairement codées en dur ici : la clé "publishable"
// Supabase est conçue pour être exposée côté client (équivalent d'une clé
// publique), la sécurité réelle est assurée par les politiques RLS définies
// en base (voir migration init_schema_sourcing_rh).
const SUPABASE_URL = 'https://motuetyractuxkljqtlk.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_z21L4Hbb_Ct2hPoUais52w_PgYkL1qL';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export type CandidateStatus =
  | 'new' | 'contacted' | 'qualified' | 'interview_1' | 'interview_2' | 'rejected' | 'hired';

export type ConsentStatus = 'pending' | 'informed' | 'opted_out';

export interface Certification {
  id: string;
  certification_type: string;
  expiry_date: string | null;
  is_verified: boolean;
}

export interface Candidate {
  id: string;
  full_name: string;
  contact_email: string | null;
  experience_years: number | null;
  availability: string | null;
  savoir_etre_score: number | null;
  status: CandidateStatus;
  consent_status: ConsentStatus;
  discovered_at: string;
  certifications?: Certification[];
}
