import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import FormAdd from '../../components/Formik'
import axios from 'axios'
import "./index.scss"
const AddPage = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [property, setProperty] = useState(null)
  async function getData() {
    const res = await axios("http://localhost:3000/")
    setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])
  async function deletedata(id) {
    const res = await axios.delete(`http://localhost:3000/${id}`)
    getData()
  }
  return (
    <>
      <Helmet>
        <title>AddPage</title>

      </Helmet>
      <div className='add'>
        <FormAdd getData={getData} />
        <div className="filter">

          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

          <div onClick={() => setProperty({ name: "title", asc: true })} className="btn">a-z</div>
          <div onClick={() => setProperty({ name: "title", asc: false })} className="btn">z-a</div>
          <div onClick={() => setProperty({ name: "price", asc: true })} className="btn">inc</div>
          <div onClick={() => setProperty({ name: "price", asc: false })} className="btn">dec</div>
          <div onClick={() => setProperty({ name: "title", asc: null })} className="btn">default</div>
        </div>
        <div className="table">
          <div className="overflow-x-auto">
            <table className="table">

              <thead>
                <tr>
                  <th>image</th>
                  <th>title</th>
                  <th>author</th>
                  <th>price</th>
                  <th>description</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  data && data
                    .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a, b) => {
                      if (property && property.asc === true) {
                        return  a[property.name] > b[property.name] ? 1 : b[property.name] > a[property.name] ? -1 : 0
                      }
                      else if (property && property.asc === false) {
                        return  a[property.name] < b[property.name] ? 1 : b[property.name] < a[property.name] ? -1 : 0
                      }
                      else {
                        return 0;
                      }

                    })
                    .map(product =>
                      <tr>
                        <td><img src={product.image} alt="" /></td>
                        <td>{product.title}</td>
                        <td>{product.author}</td>
                        <td>{product.price}</td>
                        <td>{product.desc}</td>
                        <td><i onClick={() => deletedata(product._id)} class="fa-regular fa-trash-can"></i></td>
                      </tr>
                    )
                }


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddPage