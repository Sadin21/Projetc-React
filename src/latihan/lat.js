import React, {useState} from "react"

const Lat = () => {

    const [dataBuah, setDataBuah] = useState([
        {nama : "Nanas", hargaTotal : 100000, beratTotal : 4},
        {nama : "Manggis", hargaTotal : 35000, beratTotal : 10},
        {nama : "Nangka", hargaTotal : 90000, beratTotal : 2},
        {nama : "Durian", hargaTotal : 400000, beratTotal : 5},
        {nama : "Strawberry", hargaTotal : 120000, beratTotal: 6}
    ])
    const [inputName, setName] = useState("")
    const [inputHargaTotal, setHargaTotal] = useState("")
    const [inputBeratTotal, setBeratTotal] = useState("")

    // const [input, setInput] = useState({
    //     nama: "",
    //     hargaTotal: 0,
    //     beratTotal: 0
    // })


    const handleSubmit = (event) => {
        event.preventDefault()

        // let {nama, hargaTotal, beratTotal} = input
        // let data = dataBuah

        // data = [...data, {nama, hargaTotal, beratTotal}]

        // if(data === -1) {
        //     data = [...data, {nama, hargaTotal, beratTotal}]
        // } else {
        //     data[data] = input
        // }

        // setDataBuah([...data])
        
        // setInput({
        //     nama: "",
        //     hargaTotal: 0,
        //     beratTotal: 0
        // })
    }
    const handleChange = (event) => {
        // setInput(event.target.value);
        let name = event.target.value
        setName(name)
        console.log(name)
    }
    const handleChange2 = (event) => {
        let hargaTotal = event.target.value
        setHargaTotal(hargaTotal)
        console.log(hargaTotal)
    }
    const handleChange3 = (event) => {
        let beratTotal = event.target.value
        setBeratTotal(beratTotal)
        console.log(beratTotal)
    } 

    return(
        <div className="buah">
            <h1>Form Daftar Harga Buah</h1>
            <table className="table">
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
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{res.nama}</td>
                                    <td>{res.hargaTotal}</td>
                                    <td>{res.beratTotal}Kg</td>
                                    <td>{(res.hargaTotal/res.beratTotal)}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="nama" placeholder="Your name.." value={inputName} onChange={handleChange}/><br />
                    <label>Harga Total</label>
                    <input type="number" name="hargaTotal" value={inputHargaTotal} onChange={handleChange2} /><br />
                    <label>Berat Total(dalam gram)</label>
                    <input type="number" name="beratTotal" value={inputBeratTotal} onChange={handleChange3} /><br />                    
                    <button>Submit</button>
            </form>
        </div>
    )
}

export default Lat