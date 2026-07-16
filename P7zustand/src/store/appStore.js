import { create } from "zustand";

export const useAppStore = create((set) => ({
    // Auth
    user: null,
    login: (user) => set({user}),
    logout: () => set({user: null}),

    // UI
    theme: 'light',
    toggleTheme: (state) => ({theme: state.theme === 'light' ? 'dark' : 'light'})
}))