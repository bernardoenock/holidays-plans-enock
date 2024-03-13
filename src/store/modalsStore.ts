import { create } from 'zustand'

interface ModalsStore {
  openCreate: boolean
  setOpenCreate: (bool: boolean) => void
  openUpdate: boolean
  setOpenUpdate: (bool: boolean) => void
  openList: boolean
  setOpenList: (bool: boolean) => void
  openNavMenu: boolean
  setOpenNavMenu: (bool: boolean) => void
}

const useModalsStore = create<ModalsStore>((set) => ({
  openCreate: false,
  setOpenCreate: (bool: boolean) =>
    set(() => ({openCreate: bool})),
  openUpdate: false,
  setOpenUpdate: (bool: boolean) =>
    set(() => ({openUpdate: bool})),
  openList: false,
  setOpenList: (bool: boolean) =>
    set(() => ({openList: bool})),
  openNavMenu: false,
  setOpenNavMenu: (bool: boolean) =>
    set(() => ({openNavMenu: bool})),
}))

export default useModalsStore