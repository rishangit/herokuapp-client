import React, { useState, useEffect } from 'react'
import{ map } from 'rxjs/operators'

const Customers = props =>{

let [customers, setCustomers] = useState([]);

useEffect(()=>{
     fetch('https://api-saleplus.herokuapp.com/api/list_user').then(data=>data.json())
    //fetch('http://localhost:3001/api/list_user').then(data=>data.json())
    .then(customers=>{
        setCustomers(customers.lst)
        console.log(customers)
      
    })
},[])

    return (<div>
        <div>This is customers</div>
        <div>{customers.length}</div>
            <div>{customers.map(({name, _id})=>(<div key={_id}>{name}</div>))}</div>
        </div>)
}

export default Customers