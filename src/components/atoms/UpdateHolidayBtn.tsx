import { Button } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote'

import useModalsStore from '../../store/modalsStore'
import { Holiday } from '../../interfaces/holidays'

type UpdateHolidayBtnProps = {
  holiday: Holiday
  setHoliday: (holiday: Holiday) => void
}

export default function UpdateHolidayBtn({ holiday, setHoliday }: UpdateHolidayBtnProps) {
  const {setOpenUpdate} = useModalsStore()

  const handleBtn = () => {
    setHoliday(holiday)
    setOpenUpdate(true)
  }

  return (
      <Button 
        variant='contained' 
        color='success'
        onClick={handleBtn}
        startIcon={<EditNoteIcon/>}
      >Update Holiday</Button>
  )
}