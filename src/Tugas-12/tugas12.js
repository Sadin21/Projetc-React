import React, {useEffect, useState} from 'react'
import "../css/tugas11.css"
import axios from 'axios';

const Tugas12 = () => {
    let [dataMahasiswa, setDataMahasiswa] = useState([
        
    ])

    const [input, setInput] = useState({
        name: "",
        course: "",
        score: 0,
    })

    useEffect(() => {
    let fetchData = async () => {
        let {data} = await axios.get(`https://backendexample.sanbercloud.com/api/contestants`)
        setDataMahasiswa (result = data.map((res) => {
            let {
                course,
                id,
                nama,
                score
             } = res

            return{
                course,
                id,
                nama,
                score
            }
            console.log(result)
            console.log(data)
        
        }))
        setDataMahasiswa([...result])
    } 
    fetchData()
    

    }, [])
    

    const handleChange = (event) => {
        let {name, value} = event.target
        setInput({...input, [name] : value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(dataMahasiswa)
    }

    const handleDelete = (event) => {

        let index = parseInt(event.target.value)
        let deletedItem = dataMahasiswa[index]
        let newData = dataMahasiswa.filter((e) => {return e !== deletedItem})
        setDataMahasiswa(newData)
    }

    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let editValue = dataMahasiswa[index]
        setDataMahasiswa(editValue)
        setDataMahasiswa(event.target.value)
    }

    

    return (
        <>
        <div className='container-table'>
                <table id="table-data">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Mata Kuliah</th>
                            <th>Nilai</th>
                            <th>Indeks Nilai</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataMahasiswa !== null && (
                            <>
                                {
                                    dataMahasiswa.map((res, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{res.name}</td>
                                                <td>{res.course}</td>
                                                <td>{res.score}</td>
                                                <td></td>
                                                <td>
                                                    <button onClick={handleEdit} value={index.id}>Edit</button>
                                                    <button onClick={handleDelete} value={index.id} >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </>
                        )}
                    </tbody>
                </table>
        </div>
        <div className='container-form'>
                <form onSubmit={handleSubmit}>
                    <label>Nama</label>
                    <input onChange={handleChange} value={input.name} type="text" name="name" placeholder="Your name.." />
                    <label>Mata Kuliah</label>
                    <input onChange={handleChange} value={input.course} type="text" name="course" />
                    <label>Nilai</label>
                    <input onChange={handleChange} value={input.score} type="number" name="score" />                    

                    <input type="submit" value="Submit" />
                </form>
        </div>
        </>
    )
}

export default Tugas12