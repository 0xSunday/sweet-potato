import React from 'react'
import Input from '../../UI/Input'
import "./MealItemFrom.css"
const MealItemFrom = () => {
  return (
    <form className='form'>
      <Input label="Amount"
      input={{
        id:"amount",
        type:"number",
        min:"1",
        max:"5",
        step:"1",
        defaultValue:"1"
      }}
      />
      <button>+ ADD</button>
    </form>
  )
}

export default MealItemFrom