import React, { useState } from 'react'
import axios from 'axios'
import { Dayjs } from 'dayjs'
import EditCalendarIcon from '@mui/icons-material/EditCalendar'
import { Box, Button, TextField } from '@mui/material'

import DatePicker from '../atoms/DatePicker'

export default function CreateHolidayForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Dayjs | null>(null)
  const [location, setLocation] = useState('')
  const [participants, setParticipants] = useState('')

  function generateRandomNumber() {
    const min = Math.pow(10, 9)
    const max = Math.pow(10, 10) - 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const da = date?.toString()
      await axios.post('/api/holidays', {
        id: `${generateRandomNumber()}`,
        title,
        description,
        date: da,
        location,
        participants: participants.split(',')
      })
      setTitle('')
      setDescription('')
      setDate(null)
      setLocation('')
      setParticipants('')
      window.location.reload()
      window.alert('Holiday Created! 🥳🙌🎉')
    } catch (error) {
      console.error('Error creating holiday:', error)
      window.alert('Error creating holiday... 💩')
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
        required 
        label='Title' 
        value={title}  
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField 
        variant='outlined'
        required 
        multiline
        label='Description' 
        value={description}  
        onChange={(e) => setDescription(e.target.value)}
      />
      <DatePicker date={date} setDate={setDate} />
      <TextField 
        variant='outlined'
        required
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
      <Button type='submit' variant='contained' startIcon={<EditCalendarIcon/>}>
        Create Holiday
      </Button>
    </Box>
  )
}