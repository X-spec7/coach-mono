import { ColorSet } from '@/features/statistics/types'

export class CaloriesCardColorSet {
  static calories: ColorSet = {
    bgColor: 'tw-bg-gray-bg',
    progressBgColor: 'tw-bg-white',
    progressColor: 'tw-bg-gray-10',
  }

  static protein: ColorSet = {
    bgColor: 'tw-bg-blue',
    progressBgColor: 'tw-bg-blue-subtle',
    progressColor: 'tw-bg-blue-dark',
  }

  static carbs: ColorSet = {
    bgColor: 'tw-bg-yellow',
    progressBgColor: 'tw-bg-yellow-subtle',
    progressColor: 'tw-bg-yellow-dark',
  }

  static fats: ColorSet = {
    bgColor: 'tw-bg-green',
    progressBgColor: 'tw-bg-green-subtle',
    progressColor: 'tw-bg-green-dark',
  }
}
