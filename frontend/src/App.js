import {useState, useEffect} from 'react'
import axios from 'axios'

import Food from './components/Food'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [foods, setfoods] = useState([])

  const getFoods = () => {
    axios.get('http://localhost:3000/foods')
    .then((response) => setFoods(response.data), (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
      axios.post('http://localhost:3000/foods', data)
      .then((response) => {
        console.log(response)
        getFoods()
      })
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/foods/' + data._id, data)
    .then((response) => {
      console.log(response)
      getFoods()
    })
}

  const handleDelete = (event) => {
    axios.delete('http://localhost:3000/foods/' + event.target.value)
    .then((response) => {
      getFoods()
    })
  }

  useEffect(() => {
    getFoods()
  }, [])

  return(
    <>
      <h1>Meals</h1>
      <Add handleCreate={handleCreate}/>
      {foods.map((food) => {
        return (
          <>
            <Food food={food} />
            <Edit food={food} handleEdit={handleEdit}/>
            <button onClick={handleDelete} value={food._id}>X</button>
          </>
        )
      })}
    </>
  )
}

export default App
