import {useState} from 'react'

const Edit = (props) => {
    const [food, setFood] = useState({...props.food})

    const handleChange = (event) => {
    setFood({...food, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(food)
    }

    return(
    <>
        <details>
            <summary>Edit Meal</summary>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' onChange={handleChange} value={food.name}/>
            <br/>
            <label htmlFor='ingredients'>Ingredients:</label>
            <input type='text' name='ingredients' onChange={handleChange} value={food.ingredients}/>
            <br/>
            <title>Macros:</title>
            <label htmlFor='carbs'>Carbs:</label>
            <input type='number' name='carbs' onChange={handleChange} value={food.macros.carbs}/>
            <label htmlFor='fat'>Fat:</label>
            <input type='number' name='fat' onChange={handleChange} value={food.macros.fat}/>
            <label htmlFor='protein'>Protein:</label>
            <input type='number' name='protein' onChange={handleChange} value={food.macros.protein}/>
            <label htmlFor='calories'>Calories:</label>
            <input type='number' name='calories' onChange={handleChange} value={food.macros.calories}/>
            <input type="submit"/>
        </form>
        </details>
    </>
    )
}

export default Edit