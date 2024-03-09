import { NextApiRequest, NextApiResponse } from 'next';
import { deleteHoliday } from '@/utils/methods';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    const holidayId = id;
    const deleted = deleteHoliday(holidayId as string);
    if (await deleted) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: `Holiday with ID ${holidayId} not found` });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}