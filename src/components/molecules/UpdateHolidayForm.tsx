import React, { useState } from 'react'
import axios from 'axios'
import { Box, Button, TextField } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote'
import dayjs, { Dayjs } from 'dayjs'

import { Holiday } from '../../interfaces/holidays'

import DatePicker from '../atoms/DatePicker'

type UpdateHolidayFormProps = {
  holiday: Holiday
}

const UpdateHolidayForm = ({ holiday }: UpdateHolidayFormProps) => {
  const [title, setTitle] = useState(holiday.title)
  const [description, setDescription] = useState(holiday.description)
  const [date, setDate] = useState<Dayjs | null>(dayjs(holiday.date))
  const [location, setLocation] = useState(holiday.location)
  const [participants, setParticipants] = useState(holiday.participants ? holiday.participants.join(',') : '')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const response = await axios.put(`/api/holidays?id=${holiday.id}`, {
        title,
        description,
        date,
        location,
        participants: participants.split(',')
      })
      console.log('Holiday updated:', response.data)
      setTitle('')
      setDescription('')
      setDate(null)
      setLocation('')
      setParticipants('')
      window.location.reload()
      window.alert('Holiday Updated! 🥳🙌🎉')
    } catch (error) {
      console.error('Error updating holiday:', error)
      window.alert('Error updating holiday... 💩')
    }
  }

  return (
    <Box 
      component='form' 
      onSubmit={handleSubmit} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%'
      }}
    >
      <TextField 
        variant='outlined' 
        label='Title' 
        value={title}  
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField 
        variant='outlined' 
        multiline
        label='Description' 
        value={description}  
        onChange={(e) => setDescription(e.target.value)}
      />
      <DatePicker date={date} setDate={setDate} />
      <TextField 
        variant='outlined'
        label='Location' 
        value={location} 
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField 
        variant='outlined'
        label='Participants (comma separated)' 
        value={participants} 
        onChange={(e) => setParticipants(e.target.value)}
      />
      <Button type='submit' variant='contained' startIcon={<EditNoteIcon/>}>
        Update Holiday
      </Button>
    </Box>
  )
}

export default UpdateHolidayForm