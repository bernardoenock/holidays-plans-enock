import { create } from 'zustand'
import { Holiday } from '../interfaces/holidays';

interface HolidayStore {
  holidays: Holiday[];
  addHoliday: (holiday: Holiday) => void;
  updateHoliday: (id: string, updatedHoliday: Holiday) => void;
  deleteHoliday: (id: string) => void;
  setHolidays: (holidays: Holiday[]) => void;
  holidaySelected: Holiday | object
  setHolidaySelected: (holiday: Holiday) => void
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
    holidaySelected: {},
    setHolidaySelected: (holiday: Holiday) =>
      set(() => ({holidaySelected: holiday})),
  })
)

export default useHolidayStore;