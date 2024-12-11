import React from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector( (state) => state.cash.cash)
  
  const customers = useSelector( (state) => state.customers.customers)
  
  const addCash = (cash) => {
    dispatch({type:'add', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:"GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    console.log(name);
    
    const customer = {
      name: name,
      id:Date.now(),
    }
    dispatch({type: "ADD_CUSTOMER", payload: customer})
  }

  const removeCustomer = (name) => {

  }

  return (
    <div className="App">
      <div style={{fontSize: '30px'}}>{cash}</div>
      <div style={{display: "flex"}}>
        <button onClick={()=> addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={()=> getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={()=> addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={()=> removeCustomer(Number(prompt()))}>Убрать клиента</button>
      </div>
      {customers.length > 0 
      ?
      <div>
        {customers?.map(customer =>
        <div>{customer?.name}</div>
        )}
      </div>
      :
      <div style={{fontSize: '3rem', marginTop:'20px'}}>
        Клиенты отсутствуют
      </div>
      }
    </div>
  );
}

export default App;
