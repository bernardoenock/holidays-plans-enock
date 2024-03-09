export interface CreateHoliday {
  title: string;
  description: string;
  date: string;
  location: string;
  participants?: string[];
}

export interface Holiday {
  id: string
  title: string;
  description: string;
  date: string;
  location: string;
  participants?: string[];
}