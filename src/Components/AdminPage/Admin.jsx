import React, {useState, useEffect} from 'react';
import './Admin.css'
import Optionfield from './OptionField';
import ActiveModules from './ActiveModules'
import axios from 'axios';

let n = [1]

const Admin = () => {
  const [check, setCheck] = useState(false);
  const onSetCheck = () => {
    setCheck(!check);
    if (check === false) {
      setArrState([1])
    }
  }
  
  const [arrState, setArrState] = useState(n)
  const onSetState = () => {
    setArrState((prevState) => [...prevState, 1])
  }

  const onDelState = () => {
    setArrState(arrState.splice(1))
  }

  const removeLastButton = () => {
      if (arrState.length > 1) {
        return (<button className="option__add" onClick={onDelState}>Remove Last Option</button>)
      }
  }
  
  const optionRender = () => {  
    if (check === true) {
      return (
        <>
          {arrState.map((num, index) => (<Optionfield key={num+index} number={index+1}/>))}
          <button className="option__add" onClick={onSetState}>Add More Options</button>
          {removeLastButton()}
        </>
      )
    }
  }

  const [dataState, setDataState] = useState([])
  const onDataState = (obj) => {
    setDataState([...dataState, obj])
  }
  const onDeleteDataState = (idEl) =>{
      const total = dataState.filter(({ id }) => id !== idEl)
    setDataState([...total])
    }
  
  
  const addModule = async (evn) => {
    evn.preventDefault()
    const { target } = evn;
    const {data} = await axios.post('https://serene-lowlands-92916.herokuapp.com/tasks/add',
      check ? { title: target[0].value, price: target[1].value, description: target[2].value, options: [{ title: target[4].value, price: target[5].value }, { title: target[6].value, price: target[7].value },{ title: target[8].value, price: target[9].value }] }
      : { title: target[0].value, price: target[1].value, description: target[2].value, options: []}
      )
      onDataState(data)
    }  
  
  useEffect(() => {
      axios.get('https://serene-lowlands-92916.herokuapp.com/').then(({ data }) => {
        setDataState([...data]) 
      })
      
  }, []);
  
  return (
    <div className="admin__form">
      <div className="modules__container">
        <div className="admin__stuff">
          <h1>Add new module</h1>

          <form onSubmit={addModule}>

            <div className="module__maker">           
                <input className="input" type="text" required="required" placeholder="Title" />
                <input className="input" type="text" required="required" placeholder="Price" />
                <input className="input" type="text" required="required" placeholder="Description" />
                <button className={check !== true ? "option__add" : "option__remove"} onClick={onSetCheck}>{check !== true ? "Add Options" : "Remove Options"}</button>     
                {optionRender()}
            </div>
            <button className="verification__button">Confirm</button>
            
          </form>

        </div>
        <ActiveModules data={dataState} delFunc={onDeleteDataState} />
      </div>
    </div>
  );
}

export default Admin;
