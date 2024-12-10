type SessionRange = {
  minimumDuration: number
  maximumDuration: number
}

export type ClassLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'

export type ClassCategory = 'Strength' | 'Cardio' | 'Core' | 'Flexibility'

export interface Class{
  category: ClassCategory
  title: string
  tutor: string
  videoNumber: number
  sessionRange: SessionRange
  level: ClassLevel
  durationPerSession: number
  price: number
}
