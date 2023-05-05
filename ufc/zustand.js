
import {create} from "zustand";
import { createStore } from "zustand";
import { useStore } from "zustand";


const useMapStore = create((set) => ({
    fighterLocations: [],
    selectedFighter: null,
    setFighterLocations: (locations) =>
        set(() => ({ fighterLocations: locations })),
    setSelectedFighter: (fighter) => set(() => ({ selectedFighter: fighter })),
}));

export default useMapStore