import React, { useState, useEffect } from "react";
import { map } from "rxjs/operators";

const Customers = props => {
  let [customers, setCustomers] = useState([]);
  const [nests, setNests] = useState([]);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    fetch('https://api-saleplus.herokuapp.com/api/list_user')
    //fetch("http://localhost:3001/api/list_user")
      .then(data => data.json())
      .then(customers => {
        setCustomers(customers.lst);
        console.log(customers);
      });
  }, []);

  useEffect(() => {
    if (!listening) {
       fetch('https://api-saleplus.herokuapp.com/api/request_listening')
      //fetch("http://localhost:3001/api/request_listening")
      .then(data =>data.json())
      .then(customers => {
        setCustomers(customers.lst);
        console.log(customers);
        setListening(false);
      });
      setListening(true);
    }
  }, [listening, nests]);

  const handleClick = () => {
    fetch('https://api-saleplus.herokuapp.com/api/new_user')
    //fetch("http://localhost:3001/api/new_user")
    .then(data =>data.json())
    
  };

  return (
    <div>
      <div>This is customers</div>
      <div>{customers.length}</div>
      <div>
        {customers.map(({ name, _id }) => (
          <div key={_id}>{name}</div>
        ))}
      </div>
      <div onClick={handleClick}>on Click</div>
    </div>
  );
};

export default Customers;
