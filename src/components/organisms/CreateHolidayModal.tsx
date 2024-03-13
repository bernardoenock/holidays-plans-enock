import { Box, Typography, Modal } from '@mui/material'

import useModalsStore from '../../store/modalsStore'

import CreateHolidayForm from '../molecules/CreateHolidayForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export default function CreateHolidayModal() {
  const {openCreate, setOpenCreate} = useModalsStore()

  return (
    <Modal
      open={openCreate}
      onClose={() => setOpenCreate(false)}
    >
      <Box sx={style}>
        <Typography variant='h6' component='h2'>
          Create Holiday
        </Typography>
        <CreateHolidayForm />
      </Box>
    </Modal>
  )
}