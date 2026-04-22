import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tambahBarang, hapusBarang } from './inventorySlice';

function Inventory() {
  const [namaBarang, setNamaBarang] = useState('')
  const [jumlahBarang, setjumlahBarang] = useState('')

  const dispatch = useDispatch()
  const listBarang = useSelector((state) => state.inventory.listBarang)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (namaBarang === '' || jumlahBarang === '') return

    dispatch(
      tambahBarang({
        namaBarang: namaBarang,
        jumlahBarang: Number(jumlahBarang),
      })
    )

    setNamaBarang('')
    setjumlahBarang('')
  }

  return (
    <div>
      <h2>STS E-Inventory Masjid</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama Barang"
          value={namaBarang}
          onChange={(e) => setNamaBarang(e.target.value)}
        />

        <input
          type="number"
          placeholder="Jumlah Barang"
          value={jumlahBarang}
          onChange={(e) => setjumlahBarang(e.target.value)}
        />

        <button type="submit">Tambah</button>
      </form>
      <h3>List Barang</h3>

      <ul>
        {listBarang.map((item) => (
          <li key={item.id}>
            {item.namaBarang} - {item.jumlahBarang}
            <button onClick={() => dispatch(hapusBarang(item.id))}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Inventory;