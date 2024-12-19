import { Trainer } from '@/shared/types'
import { trainersDummyData } from '../dummy-data/trainers'

export const getTrainer = ({ id }: { id: string }): Promise<Trainer | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const trainer = trainersDummyData.find((trainer) => trainer.id === id)

      resolve(trainer || null)
    }, 1000)
  })
}
