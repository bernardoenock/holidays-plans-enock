import { Box, Toolbar } from '@mui/material'

import Copyright from '../atoms/Copyright'
import ListHolidays from '../molecules/ListHolidays'
import CreateHolidayModal from '../organisms/CreateHolidayModal'
import NavMenu from '../organisms/NavMenu'
import HeaderMenu from '../organisms/HeaderMenu'
import ListHolidaysModal from '../organisms/ListHolidaysModal'

export default function Dashboard() {

  return (
    <Box sx={{ display: 'flex' }}>
      <HeaderMenu />
      <NavMenu />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <ListHolidays />
        <CreateHolidayModal />
        <ListHolidaysModal />
        <Copyright sx={{ pt: 4 }} />
      </Box>
    </Box>
  )
}