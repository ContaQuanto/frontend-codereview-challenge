export type Status = 'rejected' | 'waiting' | 'approved';

export type Candidate = {
  application_date: string;
  birth_date: string;
  email: string;
  id: number;
  name: string;
  position_applied: string;
  status: Status;
  year_of_experience: number;
};

export type ApiResponse = { candidates?: Candidate[] };
