import { NextApiRequest, NextApiResponse } from 'next';
import { Holiday } from '@/interfaces/holidays';

let holidays: Holiday[] = []; // Create store with zustand

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, description, date, location, participants } = req.body;

    if (!title || !description || !date || !location) {
      return res.status(400).json({ error: 'Please provide title, description, date, and location' });
    }

    const newHoliday: Holiday = {
      id: 'uuid347485269562',
      title,
      description,
      date,
      location,
      participants,
    };

    holidays.push(newHoliday);

    return res.status(201).json({ success: true, holiday: newHoliday });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}