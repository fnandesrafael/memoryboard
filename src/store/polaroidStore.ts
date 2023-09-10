import { create } from 'zustand';

export type PolaroidObject = {
  id: string;
  file: string;
  fileName: string;
  position: { x: number; y: number };
  layer: number;
};

type PolaroidStoreProps = {
  polaroids: Array<PolaroidObject>;
  targetedPolaroid: PolaroidObject;
  addPolaroids: (payload: Array<PolaroidObject>) => void;
  setPolaroids: (payload: Array<PolaroidObject>) => void;
  targetPolaroid: (payload: PolaroidObject) => void;
};

const usePolaroidStore = create<PolaroidStoreProps>((set) => ({
  polaroids: [],
  targetedPolaroid: null,
  addPolaroids: (payload: Array<PolaroidObject>) =>
    set((prevState) => ({
      polaroids: [...prevState.polaroids, ...payload],
    })),
  setPolaroids: (payload: Array<PolaroidObject>) =>
    set(() => ({
      polaroids: [...payload],
    })),
  targetPolaroid: (payload: PolaroidObject) =>
    set(() => ({
      targetedPolaroid: payload,
    })),
}));

export default usePolaroidStore;
