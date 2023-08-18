import { configureStore } from "@reduxjs/toolkit"
import notesReducer from './slices/notesSlice'

export const store = configureStore({
    reducer: {
        notesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch