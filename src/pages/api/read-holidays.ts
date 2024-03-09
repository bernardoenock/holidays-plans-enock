import { NextApiRequest, NextApiResponse } from 'next';
import { Holiday } from '@/interfaces/holidays';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const holidays: Holiday[] = require('./holidays').default;
    res.status(200).json(holidays);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}