import axios from 'axios'
import { Button } from '@mui/material'
import EventNoteIcon from '@mui/icons-material/EventNote'

import { holidaysMock } from '../../utils/holidaysMock'

export default function GenerateHolidaysBtn() {
  const addMockToAPI = () => {
    holidaysMock.forEach(holiday => {
      axios.post('/api/holidays', holiday)
    })
  }

  const handleMock = () => {
    try {
      addMockToAPI()
      window.location.reload()
    } catch (error) {
      console.error('Error on generate holidays:', error)
    }
  }

  return (
    <Button 
      variant='contained' 
      onClick={handleMock} 
      startIcon={<EventNoteIcon/>}
      sx={{mr: 3}}
    >Generate Holidays</Button>
  )
}