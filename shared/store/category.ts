import {create} from 'zustand';
/**
 *
 * @activeId - id категории
 * Для переключения категории observer
 */
interface State{
    activeId : number;
    setActiveId : (activeId : number) => void;
}

export const useCategoryStore = create<State>()(set => ({
	activeId: 1,
	setActiveId: (activeId) => set({activeId}),
}));


