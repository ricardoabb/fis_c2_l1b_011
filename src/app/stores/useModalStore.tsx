import { create } from 'zustand';

interface ModalState {
    activeId: number;
    title?: string;
    isOpen: boolean;
    image1?: string;
    subtitle?: string;
    video?: string;

    setModal: (params: {
        activeId?: number;
        image1?: string;
        title?: string;
        subtitle?: string;
        video?: string;
    }) => void;

    setActiveId: (id: number) => void;
    openModal: () => void;
    closeModal: () => void;
    clearModal: () => void;

}

export const useModalStore = create<ModalState>((set) => ({
    activeId: 2,
    isOpen: false,
    image1: undefined,
    title: 'Histórico Geral',
    subtitle: undefined,
    video: undefined,
    setModal: ({
        image1,
        title,
        subtitle,
        video,
    }) => set({
        image1,
        title,
        subtitle,
        video,
    }),
    openModal: () => set({
        isOpen: true,
    }),
    closeModal: () => set({
        isOpen: false,
    }),
    clearModal: () => set({
        image1: undefined,
        title: undefined,
        subtitle: undefined,
        video: undefined,
    }),
    setActiveId: (id: number) => {
        set(state => ({activeId: id}));   
      },
}));