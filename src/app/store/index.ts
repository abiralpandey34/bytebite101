import { create } from 'zustand'

interface User{
  id: string,
  email: string,
  roles: string[],
}

interface UserState {
  user?: User | null
   setUser: (user: any)=>void
}

export const useContentfulStore = create<any>((set) => ({
  contentfulClient: null,
  setContentfulClient: (client: any) => set((state: any) => ({ contentfulClient: client })),
}))

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user: any) => set((state: any) => ({ user: user })),
}))
