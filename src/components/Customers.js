import React, { useState, useEffect } from "react";
import { map } from "rxjs/operators";

import { serverPath } from "../common/consts";
import { getData, httpPost } from "../common/getData";

const Customers = props => {
  let [customers, setCustomers] = useState([]);
  const [nests, setNests] = useState([]);
  const [listening, setListening] = useState(false);

  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    // getData({call:"current_number", data:{}}).subscribe(res => {
    //   setCurrentNumber(res.obj);
    // });
  }, []);

  useEffect(() => {
    getData("list_user").subscribe(customers => {
      setCustomers(customers.lst);
    });
  }, []);

  useEffect(() => {
    if (!listening) {
      getData("request_listening").subscribe(customers => {
        setCustomers(customers.lst);
        setListening(false);
      });
      setListening(true);
    }
  }, [listening, nests]);

  const handleClick = () => {
    getData("new_user").subscribe(customers => {});
  };

  const handleNextClick = () => {
    httpPost({call:"current_number", data:{}}).subscribe(res => {
        setCurrentNumber(res.obj);
    });
  };

  return (
    <div>
      {/* <div>This is customers</div>
      <div>{customers.length}</div>
      <div>
        {customers.map(({ name, _id }) => (
          <div key={_id}>{name}</div>
        ))}
      </div>

      
      <div onClick={handleClick}>on Click</div> */}
      <h1>{currentNumber}</h1>

      <div onClick={handleNextClick}>Next</div>
    </div>
  );
};

export default Customers;
