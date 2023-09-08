import { create } from 'zustand';

export type Polaroid = {
  id: string;
  file: Blob | string;
  fileName: string;
  position: { x: number; y: number };
  layer: number;
};

type PolaroidStoreProps = {
  polaroids: Array<Polaroid>;
  targetedPolaroid: Polaroid;
  addPolaroids: (payload: Array<Polaroid>) => void;
  setPolaroids: (payload: Array<Polaroid>) => void;
  targetPolaroid: (payload: Polaroid) => void;
};

const usePolaroidStore = create<PolaroidStoreProps>((set) => ({
  polaroids: [],
  targetedPolaroid: null,
  addPolaroids: (payload: Array<Polaroid>) =>
    set((prevState) => ({
      polaroids: [...prevState.polaroids, ...payload],
    })),
  setPolaroids: (payload: Array<Polaroid>) =>
    set(() => ({
      polaroids: [...payload],
    })),
  targetPolaroid: (payload: Polaroid) =>
    set(() => ({
      targetedPolaroid: payload,
    })),
}));

export default usePolaroidStore;
