import { create } from 'zustand'

interface Fit {
    head: any[]
    shirt: any[]
    jack: any[]
    pant: any[]
    shoe: any[]
}

interface FitStore {
    fit: Fit | null,
    setFit: (data: Fit) => void
}

const useFitStore = create<FitStore>((set) => ({
    fit: null,
    setFit: (data) => set((state) => ({
        fit: state.fit ? { ...state.fit, ...data } : data
    }))

}))

export default useFitStore
