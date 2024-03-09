import { Holiday } from "@/interfaces/holidays";

let holidays: Holiday[] = []; // Create store with zustand

export async function getHolidayById(id: string): Promise<Holiday | undefined> {
  return holidays.find(holiday => holiday.id === id);
}

export async function updateHoliday(id: string, updatedHoliday: Holiday): Promise<Holiday | undefined> {
  const index = holidays.findIndex(holiday => holiday.id === id);
  if (index !== -1) {
    holidays[index] = { ...updatedHoliday, id };
    return holidays[index];
  }
  return undefined;
}

export async function deleteHoliday(id: string): Promise<boolean> {
  const initialLength = holidays.length;
  holidays = holidays.filter(holiday => holiday.id !== id);
  return holidays.length !== initialLength;
}