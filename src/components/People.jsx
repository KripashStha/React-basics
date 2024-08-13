import React from 'react'
import Card from './Card'

function People() {
    const datas = [
        {
            "name": "Lareina Willis",
            "phone": "(593) 874-6866",
            "email": "a.dui.cras@icloud.com",
            "address": "538-9816 Suspendisse Road"
        },
        {
            "name": "Cooper Flores",
            "phone": "(765) 204-7236",
            "email": "sapien@hotmail.couk",
            "address": "P.O. Box 638, 7720 Dui, St."
        },
        {
            "name": "August Reyes",
            "phone": "1-254-520-3825",
            "email": "sem@protonmail.couk",
            "address": "Ap #887-7767 Magna. Avenue"
        },
        {
            "name": "Robert Garrett",
            "phone": "1-824-861-6286",
            "email": "et@icloud.com",
            "address": "614 Enim Street"
        },
        {
            "name": "Wynne Ramos",
            "phone": "(730) 603-2928",
            "email": "luctus.aliquet.odio@outlook.org",
            "address": "P.O. Box 399, 5053 Tellus. Avenue"
        }
    ]
  return (
    datas.map((data, indx) => (
        <Card key={indx} name={data.name} phone={data.phone} email={data.email} address={data.address}/>
    ))
    
  )
}

export default People