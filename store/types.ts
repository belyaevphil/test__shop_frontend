import { IItem } from './items'
import { IMaterial } from './materials'

export interface IRootState {
  items: IItem[]
  materials: IMaterial[]
}
