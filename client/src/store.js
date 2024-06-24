import { create } from 'zustand'

const useGlobalState = create((set) => ({
    show: false,
    text: "",
    status: "success",
    toggleShow: () => set((state) => ({ show: !state.show })),
    setText: (text) => set(() => ({text})),
    setStatus: (status) => set(() => ({status}))
}));

export default useGlobalState;
