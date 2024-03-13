import { Holiday } from '../interfaces/holidays'

const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Gina', 'Henry', 'Isabel', 'John']

function shuffleNames() {
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [names[i], names[j]] = [names[j], names[i]]
  }
}

function generateRandomParticipants() {
  shuffleNames()
  const numParticipants = Math.floor(Math.random() * names.length) + 1
  return names.slice(0, numParticipants)
}

function generateRandomNumber() {
  const min = Math.pow(10, 9)
  const max = Math.pow(10, 10) - 1
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const holidaysMock: Holiday[] = [
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia de Ano Novo',
    description: "New Year's Day is the first day of the year. It marks the beginning of the Gregorian calendar year.",
    date: '2024-01-01',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Sexta-feira Santa',
    description: 'Good Friday is a Christian holiday commemorating the crucifixion of Jesus and his death at Calvary.',
    date: '2024-04-05',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Domingo de Páscoa',
    description: 'Easter Sunday, also known as Resurrection Sunday, is a holiday celebrating the resurrection of Jesus from the dead.',
    date: '2024-04-07',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia da Liberdade',
    description: 'Freedom Day commemorates the Carnation Revolution in 1974, which ended the authoritarian regime in Portugal.',
    date: '2024-04-25',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia do Trabalhador',
    description: 'Labour Day is a celebration of laborers and the working classes, and is promoted by the international labor movement.',
    date: '2024-05-01',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Corpo de Deus',
    description: 'Corpus Christi is a Christian holiday commemorating the Eucharist. It is observed on the Thursday after Trinity Sunday.',
    date: '2024-06-20',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia de Portugal, de Camões e das Comunidades Portuguesas',
    description: 'Portugal Day commemorates the death of Luis de Camões, a poet and national literary icon, and celebrates Portuguese heritage.',
    date: '2024-06-10',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Assunção de Nossa Senhora',
    description: 'Assumption of Mary is a Christian doctrine that teaches that the Virgin Mary was assumed bodily into heaven.',
    date: '2024-08-15',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Implantação da República',
    description: 'Republic Day commemorates the establishment of the Portuguese Republic in 1910, ending the monarchy.',
    date: '2024-10-05',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia de Todos os Santos',
    description: "All Saints' Day is a Christian solemnity celebrated in honor of all the saints, known and unknown.",
    date: '2024-11-01',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia da Restauração da Independência',
    description: "Restoration of Independence Day commemorates the restoration of Portugal's independence from Spain in 1640.",
    date: '2024-12-01',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia da Imaculada Conceição',
    description: 'Immaculate Conception Day celebrates the belief in the immaculate conception of the Virgin Mary.',
    date: '2024-12-08',
    location: 'Portugal',
    participants: generateRandomParticipants()
  },
  {
    id:`${generateRandomNumber()}`,
    title: 'Dia de Natal',
    description: 'Christmas Day is a Christian holiday commemorating the birth of Jesus Christ.',
    date: '2024-12-25',
    location: 'Portugal',
    participants: generateRandomParticipants()
  }
]