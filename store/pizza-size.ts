import { create } from 'zustand'

interface State {
	activeSize: number
	setActiveSize: (activeSize: number) => void
}

export const useSizeStore = create<State>(set => ({
	activeSize: 20,
	setActiveSize: (activeSize: number) => set({ activeSize }),
}))