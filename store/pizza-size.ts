import { create } from 'zustand'

interface State {
	activeSizeId: number
	setActiveSize: (activeSizeId: number) => void
}

export const useSizeStore = create<State>(set => ({
	activeSizeId: 1,
	setActiveSize: (activeSizeId: number) => set({ activeSizeId }),
}))