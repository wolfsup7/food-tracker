import {useState} from 'react'

const Add = (props) => {
    const [food, setFood] = useState({name: '', ingredients: '', macros: {carbs: 0, fat: 0, protein: 0, calories: 0}})

    const handleChange = (event) => {
    setFood({...food, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(food)
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange}/>
            <br/>
            <label htmlFor='ingredients'>Ingredients:</label>
            <input type='text' name='ingredients' onChange={handleChange}/>
            <br/>
            <title>Macros:</title>
            <label htmlFor='carbs'>Carbs:</label>
            <input type='number' name='carbs' onChange={handleChange}/>
            <label htmlFor='fat'>Fat:</label>
            <input type='number' name='fat' onChange={handleChange}/>
            <label htmlFor='protein'>Protein:</label>
            <input type='number' name='protein' onChange={handleChange}/>
            <label htmlFor='calories'>Calories:</label>
            <input type='number' name='calories' onChange={handleChange}/>
            <input type="submit"/>
        </form>
    </>
    )
}

export default Add