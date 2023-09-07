import { create } from 'zustand';
import { CustomFile } from '@components/Dropzone/Dropzone';

type PolaroidStoreProps = {
  targetedPolaroid: CustomFile;
  polaroids: Array<CustomFile>;
  addPolaroids: (payload: Array<CustomFile>) => void;
  setPolaroids: (payload: Array<CustomFile>) => void;
  targetPolaroid: (payload: CustomFile) => void;
};

const usePolaroidStore = create<PolaroidStoreProps>((set) => ({
  targetedPolaroid: null,
  polaroids: [],
  addPolaroids: (payload: Array<CustomFile>) =>
    set((prevState) => ({
      polaroids: [...prevState.polaroids, ...payload],
    })),
  setPolaroids: (payload: Array<CustomFile>) =>
    set(() => ({
      polaroids: [...payload],
    })),
  targetPolaroid: (payload: CustomFile) =>
    set(() => ({
      targetedPolaroid: payload,
    })),
}));

export default usePolaroidStore;
