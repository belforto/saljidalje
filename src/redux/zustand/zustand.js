import create from 'zustand'

export const useStore = create(set => ({
  artikalaUKosarici: 0,
  zustandpovecajBrArtikalaUKosarici: () => set(state => ({ artikalaUKosarici: state.artikalaUKosarici + 1 })),
  zustandmakniSveArtikle: () => set({ artikalaUKosarici: 0 })
}))