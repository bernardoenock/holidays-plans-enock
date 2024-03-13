import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

import useModalsStore from '../../store/modalsStore'
import { Holiday } from '../../interfaces/holidays'

import UpdateHolidayForm from '../molecules/UpdateHolidayForm'

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

type UpdateHolidayModalProps = {
  holiday?: Holiday
}

export default function UpdateHolidayModal({holiday}: UpdateHolidayModalProps) {
  const {openUpdate, setOpenUpdate} = useModalsStore()

  return (
    <Modal
      open={openUpdate}
      onClose={() => setOpenUpdate(false)}
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Update Holiday
        </Typography>
        <UpdateHolidayForm holiday={holiday as Holiday} />
      </Box>
    </Modal>
  )
}