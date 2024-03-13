import dayjs from 'dayjs'
import { Grid, Paper, Typography } from '@mui/material'

import { Holiday } from '../../interfaces/holidays'
import useHolidayStore from '../../store/holidaysStore'

import DeleteHolidayButton from '../atoms/DeleteHolidayBtn'
import UpdateHolidayBtn from '../atoms/UpdateHolidayBtn'
import GeneratePdfBtn from '../atoms/GeneratePdfBtn'

type CardHolidayProps = {
  holiday: Holiday
}

export default function CardHoliday({ holiday }: CardHolidayProps) {
  const { setHolidaySelected } = useHolidayStore()

  return (
    <Grid item xs={12} md={4} lg={3} height={570}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%'
          }}
        >
          <Typography variant='h5'>{holiday.title}</Typography>
          <Typography variant='body1'>{holiday.description}</Typography>
          <Typography variant='body1'><strong>Date:</strong> {dayjs(holiday.date).format('MM/DD/YYYY')}</Typography>
          <Typography variant='body1'><strong>Location:</strong> {holiday.location}</Typography>
          {holiday.participants && holiday.participants.length > 0 && (
            <Typography variant='body1'><strong>Participants:</strong> {holiday.participants.join(', ')}</Typography>
          )}
          <DeleteHolidayButton holidayId={holiday.id} />
          <UpdateHolidayBtn holiday={holiday} setHoliday={setHolidaySelected}/>
          <GeneratePdfBtn holiday={holiday} />
        </Paper>
    </Grid>
  )
}