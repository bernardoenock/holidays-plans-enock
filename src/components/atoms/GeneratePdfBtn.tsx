import { Button } from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

import generatePDF from '../../utils/pdfGenerator'
import { Holiday } from '../../interfaces/holidays'

type GeneratePdfBtnProps = {
  holiday: Holiday
}

export default function GeneratePdfBtn({ holiday }: GeneratePdfBtnProps) {
  const handlePdfBtn = async () => {
    try {
      const filePath = 'holiday-plan.pdf'
      await generatePDF(holiday, filePath)
      window.alert('Holiday PDF Created! 🎉')
    } catch (error) {
      console.error('Error on generate PDF:', error)
      window.alert('Error on generate PDF... 💩')
    }
  }

  return (
    <Button 
      variant='contained' 
      color='warning'
      onClick={handlePdfBtn} 
      startIcon={<PictureAsPdfIcon/>}
    >Generate Pdf</Button>
  )
}