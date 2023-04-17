import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormItemProps } from '@/utils/interfaces';

type FormState = {
  cards: Array<FormItemProps>;
};

const initialState: FormState = {
  cards: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FormItemProps>): FormState => {
      state.cards.push(action.payload);
      return state;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
