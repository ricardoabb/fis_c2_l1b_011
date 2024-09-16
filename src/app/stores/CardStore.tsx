import { create } from "zustand";

type State = {
  
  targetId: string;
  activeTitle: string;
  isActive: boolean;
  isImageActive: boolean;
  
  
  setTarget: (target: string) => void;
  setTitle: (target: string) => void;
  setImageActive: (active: boolean) => void;
  
}

const useCardStore = create<State>((set) => ({
  activeId: 0,
  activeTitle: "GRANDEZAS FÍSICAS",
  isActive: false,
  targetId: 'container',
  isImageActive: false,


  setTarget: (target: string) => {
    set(state => ({targetId: target}));   
  },
  setTitle: (title: string) => {
    set(state => ({activeTitle: title}));   
  },
  setImageActive: (active: boolean) => {
    set(state => ({isImageActive: active}));   
  }

}));

export default useCardStore;