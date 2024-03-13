import jsPDF from 'jspdf'
import dayjs from 'dayjs'
import { Holiday } from "../interfaces/holidays"

const generatePDF = async (holiday: Holiday, filePath: string): Promise<void> => {
  const doc = new jsPDF()

  doc.setFontSize(20)
  doc.text(`Holiday Plan: ${holiday.title}`, 10, 20)

  doc.setFontSize(12)
  doc.text(`Date: ${dayjs(holiday.date).format('MM/DD/YYYY')}`, 10, 30)
  doc.text(`Location: ${holiday.location}`, 10, 40)
  doc.text(`Description:`, 10, 50)
  doc.text(`${holiday.description}`, 10, 60)
  if(holiday.participants){
    doc.text(`Participants: ${holiday.participants}`, 10, 70)
  }

  doc.save(filePath)
}

export default generatePDF