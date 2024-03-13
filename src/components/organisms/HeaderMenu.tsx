import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { Box, IconButton, Toolbar, Typography, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import useModalsStore from '../../store/modalsStore'

import GenerateHolidaysBtn from '../atoms/GenerateHolidaysBtn'
import CreateHolidayBtn from '../atoms/CreateHolidayBtn'

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: 240,
    width: `calc(100% - ${240}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function HeaderMenu() {
  const { openNavMenu, setOpenNavMenu } = useModalsStore()

  return (
    <AppBar position='absolute' open={openNavMenu}>
      <Toolbar
        sx={{
          pr: '24px',
        }}
      >
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={() => setOpenNavMenu(true)}
          sx={{
            marginRight: '36px',
            ...(openNavMenu && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Holidays Plans!
        </Typography>

        <Box  
          sx={{
            '@media (max-width: 570px)': {
              display: 'none',
              },
            }}
        >
          <GenerateHolidaysBtn />
          <CreateHolidayBtn />
        </Box>
      </Toolbar>
    </AppBar>
  )
}