import { create } from 'zustand';

type PolaroidStoreProps = {
  polaroids: Array<File>;
  setPolaroids: (payload: object) => void;
};

const usePolaroidStore = create<PolaroidStoreProps>((set) => ({
  polaroids: [],
  setPolaroids: (payload: Array<File>) =>
    set((prevState) => ({
      polaroids: [...prevState.polaroids, ...payload],
    })),
}));

export default usePolaroidStore;
