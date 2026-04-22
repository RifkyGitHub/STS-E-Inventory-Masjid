import { createSlice } from '@reduxjs/toolkit'



const inventorySlice = createSlice({
  name: 'inventory',
  initialState:{listBarang :[]},
  reducers: {
    tambahBarang: (state, action) => {
      const { namaBarang, jumlahBarang } = action.payload

      state.listBarang.push({
        id: state.listBarang.length + 1,
        namaBarang,
        jumlahBarang,
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