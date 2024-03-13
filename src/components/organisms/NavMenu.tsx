import { Divider, IconButton, Toolbar, styled } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

import useModalsStore from '../../store/modalsStore'

import ListMenu from '../molecules/ListMenu'

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)

export default function NavMenu() {
  const { openNavMenu, setOpenNavMenu } = useModalsStore()


  return (
    <Drawer variant='permanent' open={openNavMenu}>
    <Toolbar
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
      }}
    >
      <IconButton onClick={() => setOpenNavMenu(false)}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <ListMenu />
  </Drawer>
  )
}