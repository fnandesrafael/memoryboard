import { create } from 'zustand';
import { CustomFile } from '@components/Dropzone/Dropzone';

type PolaroidStoreProps = {
  polaroids: Array<CustomFile>;
  setPolaroids: (payload: Array<CustomFile>) => void;
  recoverPolaroids: (payload: Array<CustomFile>) => void;
};

const usePolaroidStore = create<PolaroidStoreProps>((set) => ({
  polaroids: [],
  setPolaroids: (payload: Array<CustomFile>) =>
    set((prevState) => ({
      polaroids: [...prevState.polaroids, ...payload],
    })),
  recoverPolaroids: (payload: Array<CustomFile>) =>
    set(() => ({
      polaroids: [...payload],
    })),
}));

export default usePolaroidStore;
