import React, {useState} from 'react'
import "../css/tugas11.css"

const Tugas11 = () => {
    let [dataBuah, setDataBuah] = useState([
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
    ])

    const [input, setInput] = useState({
        nama: "",
        hargaTotal: 0,
        beratTotal: 0
    })

    const handleChange = (event) => {
        let {name, value} = event.target
        setInput({...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let {nama, hargaTotal, beratTotal} = input
        let data = dataBuah

        data = [...data, {nama, hargaTotal, beratTotal}]

        if (data === -1) {
            data = [...data, {nama, hargaTotal, beratTotal}]
          } else {
            data[data] = input
          }
        
        setDataBuah([...data])

        setInput({
            nama: "",
            hargaTotal: 0,
            beratTotal: 0
        })
    }

    const handleDelete = (event) => {

        let index = parseInt(event.target.value)
        let deletedItem = dataBuah[index]
        let newData = dataBuah.filter((e) => {return e !== deletedItem})
        setDataBuah(newData)
    }

    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let editValue = dataBuah[index]
        setDataBuah(editValue)
        setDataBuah(event.target.value)
    }

    return (
        <>
        <div className='container-table'>
                <table id="table-data">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga Total</th>
                            <th>Berat Total</th>
                            <th>Harga per Kg</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataBuah.map((res, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{res.nama}</td>
                                        <td>{res.hargaTotal}</td>
                                        <td>{res.beratTotal}</td>
                                        <td>{res.hargaTotal/(res.beratTotal/1000)}Kg</td>
                                        <td>
                                            <button onClick={handleEdit} value={index}>Edit</button>
                                            <button onClick={handleDelete} value={index} >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
        <div className='container-form'>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input onChange={handleChange} value={input.nama} type="text" name="nama" placeholder="Your name.." />
                    <label>Harga Total</label>
                    <input onChange={handleChange} value={input.hargaTotal} type="number" name="hargaTotal" />
                    <label for="beratTotalMin"  >Berat Total</label>
                    <input onChange={handleChange} id="beratTotallMin" min={2} value={input.beratTotal} type="number" name="beratTotal" />                    

                    <input type="submit" value="Submit" />
                </form>
        </div>
        </>
    )
}

export default Tugas11