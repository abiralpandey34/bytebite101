import { create } from 'zustand'

export const useClientStore = create<any>((set) => ({
  contentfulClient: null,
  setContentfulClient: (client: any) => set((state: any) => ({ contentfulClient: client })),
}))
