import React from 'react'

function List() {
    const food = ["fries", "momo", "chowmein", "egg"];

    const foodList = food.map((food) => (
        <>
          <li>{food}</li>
        </>
    ))

  return (
    <div>
        <div>Learning List</div>
        <ul>
            {foodList}


            {/* <li>{food[0]}</li>
            <li>{food[1]}</li>
            <li>{food[2]}</li>
            <li>{food[3]}</li> // not practical if many items in array so we use map */}
        </ul>
    </div>
  )
}

export default List