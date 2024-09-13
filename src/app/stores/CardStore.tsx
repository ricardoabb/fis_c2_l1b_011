import { create } from "zustand";

type State = {
  activeId: string;
  targetId: string;
  activeTitle: string;
  isActive: boolean;
  setActive: (id: string) => void;
  setTarget: (target: string) => void;
  setTitle: (target: string) => void;
}

const useCardStore = create<State>((set) => ({
  activeId: '',
  activeTitle: "GRANDEZAS FÍSICAS",
  isActive: false,
  targetId: 'container',

  setActive: (id: string) => {
    set(state => ({activeId: id}));   
  },
  setTarget: (target: string) => {
    set(state => ({targetId: target}));   
  },
  setTitle: (title: string) => {
    set(state => ({activeTitle: title}));   
  }

}));

export default useCardStore;