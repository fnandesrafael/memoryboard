import { create } from 'zustand';

type ImportStoreProps = {
  isImporting: boolean;
  setIsImporting: (state: boolean) => void;
};

const useImportStore = create<ImportStoreProps>((set) => ({
  isImporting: false,
  setIsImporting: (state) => set(() => ({ isImporting: state })),
}));

export default useImportStore;
