import { create } from 'zustand'
import { Holiday } from '@/interfaces/holidays';
// import { holidaysMock } from './holidaysMock';

interface HolidayStore {
  holidays: Holiday[];
  addHoliday: (holiday: Holiday) => void;
  updateHoliday: (id: string, updatedHoliday: Holiday) => void;
  deleteHoliday: (id: string) => void;
  setHolidays: (holidays: Holiday[]) => void;
}

const useHolidayStore = create<HolidayStore>((set) => ({
    holidays: [],
    addHoliday: (holiday: Holiday) =>
      set((state) => ({ holidays: [...state.holidays, holiday] })),
    setHolidays: (holidays: Holiday[]) => 
      set(() => ({ holidays })),
    updateHoliday: (id: string, updatedHoliday: Holiday) =>
      set((state) => ({
        holidays: state.holidays.map((holiday) =>
          holiday.id === id ? updatedHoliday : holiday
        ),
      })),
    deleteHoliday: (id: string) =>
      set((state) => ({
        holidays: state.holidays.filter((holiday) => holiday.id !== id),
      })),
  })
)

export default useHolidayStore;