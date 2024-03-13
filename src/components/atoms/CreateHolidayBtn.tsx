import { Button } from '@mui/material'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'

import useModalsStore from '../../store/modalsStore'

export default function CreateHolidayBtn() {
  const { setOpenCreate } = useModalsStore()

  return (
    <Button 
      variant='contained' 
      onClick={() => setOpenCreate(true)}
      startIcon={<EditCalendarIcon/>}
    >Create Holiday</Button>
  )
}