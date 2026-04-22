import { createSlice } from '@reduxjs/toolkit'



const inventorySlice = createSlice({
  name: 'inventory',
  initialState:{listBarang :[]},
  reducers: {
    tambahBarang: (state, action) => {
      const { namaBarang, kuantitas } = action.payload

      state.listBarang.push({
        id: state.listBarang.length + 1,
        namaBarang,
        kuantitas,
      })
    },

    hapusBarang: (state, action) => {
      const id = action.payload
      state.listBarang = state.listBarang.filter(
        (item) => item.id !== id
      )
    },
  },
})

export const { tambahBarang, hapusBarang } = inventorySlice.actions;
export default inventorySlice.reducer;