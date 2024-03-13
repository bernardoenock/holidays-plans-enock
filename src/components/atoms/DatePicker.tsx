import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker'

type DatePickerProps = {
  date: Dayjs | null
  setDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>
}

export default function DatePicker({date, setDate}: DatePickerProps) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePickerMui']}>
        <DatePickerMui
          label='Date'
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}