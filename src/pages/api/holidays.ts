import { NextApiRequest, NextApiResponse } from 'next';
import useHolidayStore from '@/store/holidaysStore';
import { Holiday } from '@/interfaces/holidays';

function getHolidays(): Holiday[] {
  return useHolidayStore.getState().holidays;
}

function addHoliday(newHoliday: Holiday): Holiday {
  const holidays = useHolidayStore.getState().holidays;
  const updatedHoliday = { ...newHoliday };
  useHolidayStore.setState({ holidays: [...holidays, updatedHoliday] });
  return updatedHoliday;
}

function updateHoliday(id: string, updatedHoliday: Holiday): Holiday | undefined {
  const holidays = useHolidayStore.getState().holidays;
  const index = holidays.findIndex(holiday => holiday.id === id);
  if (index !== -1) {
    const updatedHolidays = [...holidays];
    updatedHolidays[index] = { ...updatedHoliday, id };
    useHolidayStore.setState({ holidays: updatedHolidays });
    return updatedHolidays[index];
  }
  return undefined;
}

function deleteHoliday(id: string): boolean {
  const holidays = useHolidayStore.getState().holidays;
  const filteredHolidays = holidays.filter(holiday => holiday.id !== id);
  if (filteredHolidays.length !== holidays.length) {
    useHolidayStore.setState({ holidays: filteredHolidays });
    return true;
  }
  return false;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(getHolidays());
      break;
    case 'POST':
      const newHoliday = req.body;
      res.status(201).json(addHoliday(newHoliday));
      break;
    case 'PUT':
      const holidayId = req.query.id as string;
      const updatedHoliday = req.body;
      const updated = updateHoliday(holidayId, updatedHoliday);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({ error: `Holiday with ID ${holidayId} not found` });
      }
      break;
    case 'DELETE':
      try {
        const deleteId = req.query.id as string;
        const deleted = deleteHoliday(deleteId);
        if (deleted) {
          res.status(200).json({ success: true });
        } else {
          res.status(404).json({ error: `Holiday with ID ${deleteId} not found` });
        }
      } catch (error) {
        console.error('Error deleting holiday:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;
      
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}