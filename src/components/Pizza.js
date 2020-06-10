import React from "react"

const Pizza = (props) => {
  console.log(props.pizza.id)
  const { id, topping, size, vegetarian  } = props.pizza
  return(
    <tr>
      <td>{ topping }</td>
      <td>{ size }</td>
      <td>{ vegetarian ? "yes" : "no" }</td>
      <td><button type="button" className="btn btn-primary" onClick={() => props.handleEdit(props.pizza)} >Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza


