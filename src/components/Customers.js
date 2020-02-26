import React, { useState, useEffect } from 'react'
import{ map } from 'rxjs/operators'

const Customers = props =>{

let [customers, setCustomers] = useState([]);

useEffect(()=>{
    fetch('https://stormy-plateau-client.herokuapp.com/api').then(data=>data.json())
    .then(customers=>{
        setCustomers(customers)
        console.log(customers)
      
    })
},[])

    return (<div>
        <div>This is customers</div>
        <div>{customers.length}</div>
            <div>{customers.map(({name, id})=>(<div key={id}>{name}</div>))}</div>
        </div>)
}

export default Customers