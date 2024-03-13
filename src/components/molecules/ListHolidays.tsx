import React, { useEffect } from 'react'
import axios from 'axios'
import { Container, Grid, Typography } from '@mui/material'

import useHolidayStore from '../../store/holidaysStore'
import { Holiday } from '../../interfaces/holidays'

import UpdateHolidayModal from '../organisms/UpdateHolidayModal'
import CardHoliday from './CardHoliday'

export default function ListHolidays() {
  const {holidays, setHolidays, holidaySelected } = useHolidayStore()

  useEffect(() => {
    async function fetchHolidays() {
      try {
        const response = await axios.get('/api/holidays')
        setHolidays(response.data);
      } catch (error) {
        console.error('Error fetching holidays:', error)
      }
    }
    fetchHolidays()
  }, [])

  return (
    <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Typography variant='h2'>List of Holidays</Typography>
      <Grid container spacing={3}>
        {holidays.map(holiday => (
          <CardHoliday key={holiday.id} holiday={holiday}/>
        ))}
      </Grid>
      <UpdateHolidayModal holiday={holidaySelected as Holiday} />
    </Container>
  )
}
