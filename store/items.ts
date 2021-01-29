import { MutationTree, ActionTree, GetterTree } from 'vuex'

import { IRootState } from './types'

export interface IItem {
  id: string
  name: string
  code: string | null
  price: {
    old_price: number | null
    current_price: number
  }
  image: {
    url: string
  }
  material: number
}

interface IItemsState {
  items: IItem[]
}

export const state = (): IItemsState => ({
  items: [],
})

export enum ItemsMutations {
  ADD_ITEMS = 'ADD_ITEMS',
}

export const mutations: MutationTree<IItemsState> = {
  [ItemsMutations.ADD_ITEMS](state, payload: IItem[]) {
    state.items = payload
  },
}

export const actions: ActionTree<IItemsState, IRootState> = {
  fetchItems: async ({ commit }) => {
    const response = await fetch(`/test__shop_frontend/items.json`)
    if (response.ok) {
      const items = await response.json()
      commit(ItemsMutations.ADD_ITEMS, items)
    }
  },
}

export const getters: GetterTree<IItemsState, IRootState> = {
  getItems: (state) => state.items,
}
