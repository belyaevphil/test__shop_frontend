import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { IRootState } from './types'

export interface IMaterial {
  id: string
  name: string
}

interface IMaterialsState {
  materials: IMaterial[]
}

export const state = (): IMaterialsState => ({
  materials: [],
})

export enum MaterialsMutations {
  ADD_MATERIALS = 'ADD_MATERIALS',
}

export const mutations: MutationTree<IMaterialsState> = {
  [MaterialsMutations.ADD_MATERIALS](state, payload: IMaterial[]) {
    state.materials = payload
  },
}

export const actions: ActionTree<IMaterialsState, IRootState> = {
  fetchMaterials: async ({ commit }) => {
    const response = await fetch('/test__shop_frontend/materials.json')
    if (response.ok) {
      const materials = await response.json()
      commit(MaterialsMutations.ADD_MATERIALS, materials)
    }
  },
}

export const getters: GetterTree<IMaterialsState, IRootState> = {
  getMaterials: (state) => {
    return state.materials
  },
}
