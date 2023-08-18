import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { notes, note } from '../../types/models';

const initialState: notes = {
    notes: []
}

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<note>) => {
            state.notes.push(action.payload)
        },

        removeNote: (state, action) => {
            state.notes = state.notes.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;