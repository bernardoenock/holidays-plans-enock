import { Box, Modal } from '@mui/material'

import useModalsStore from '../../store/modalsStore'

import ListHolidays from '../molecules/ListHolidays'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'calc(100% - 32px)',
  maxHeight: 'calc(100% - 32px)',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,

}

export default function ListHolidaysModal() {
  const {openList, setOpenList} = useModalsStore()

  return (
    <Modal
      open={openList}
      onClose={() => setOpenList(false)}
    >
      <Box sx={style}>
        <ListHolidays />
      </Box>
    </Modal>
  )
}