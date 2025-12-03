export interface WorkSession {
  id: string;
  startTime: Date;
  endTime: Date | null;
  project?: {
    name: string;
    type: string;
  };
  workspace: string;
  notes?: string;
  duration?: number;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  type: string;
  totalHours?: number;
}

export interface MonthlyStats {
  totalHours: number;
  sessions: number;
  averageDaily: number;
}
