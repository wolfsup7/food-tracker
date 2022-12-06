const Food = (props) => {
    return(
        <>
            <h3>Name: {props.food.name}</h3>
            <p>Ingredients: {props.food.ingredients}</p>
            <ul>
            <title>Macros:</title>
            <li>Carbs: {props.food.macros.carbs}</li>
            <li>Fat: {props.food.macros.fat}</li>
            <li>Protein: {props.food.macros.protein}</li>
            <li>Calories: {props.food.macros.calories}</li>
            </ul>
        </>
    )
}

export default Food