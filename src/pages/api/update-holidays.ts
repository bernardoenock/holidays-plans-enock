import { NextApiRequest, NextApiResponse } from 'next';
import { Holiday } from '@/interfaces/holidays';
import { updateHoliday } from '@/utils/methods';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const holidayId = id?.toString();
    const updatedHoliday: Holiday = req.body;
    const updated = updateHoliday(holidayId as string, updatedHoliday);
    if (updated) {
      res.status(200).json(updated);
    } else {
      res.status(404).json({ error: `Holiday with ID ${holidayId} not found` });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}