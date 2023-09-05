import { create } from 'zustand';

type ImportStoreProps = {
  isImporting: boolean;
  setIsImporting: () => void;
};

const useImportStore = create<ImportStoreProps>((set) => ({
  isImporting: false,
  setIsImporting: () => set(() => ({ isImporting: true })),
}));

export default useImportStore;
