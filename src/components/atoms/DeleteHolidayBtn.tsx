import React from 'react'
import axios from 'axios'
import { Button, IconButton } from '@mui/material'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep'

type DeleteHolidayButtonProps = {
  holidayId: string
  isIcon?: boolean
}

const DeleteHolidayButton = ({ holidayId, isIcon }: DeleteHolidayButtonProps) => {

  const handleDelete = async (holidayId: string) => {
    try {
      const response = await axios.delete(`/api/holidays?id=${holidayId}`)
      console.log('Holiday deleted:', response.data)
      window.location.reload()
      window.alert('Holiday Deleted! 💩')
    } catch (error) {
      console.error('Error deleting holiday:', error)
      window.alert('Error deleting holiday... 💩')
    }
  }

  return isIcon ? (
    <IconButton
      onClick={() => handleDelete(holidayId)}
    ><DeleteSweepIcon/>
    </IconButton>
  ) : (
    <Button 
      variant='contained' 
      color='error'
      onClick={() => handleDelete(holidayId)}
      startIcon={<DeleteSweepIcon/>}
    >Delete Holiday
    </Button>
  )
}

export default DeleteHolidayButton