import React from 'react';
import axios from 'axios';

const Moduleslist = ({item, delFunc}) => {
  const moduleChecker = () => {
    if (item.options !== undefined) {
      if (item.options.length > 1) {
      return (
        <div className="main__option__container">
          <h1 className="option__caption">Options:</h1>
          <div className="options__container">
            {item.options.map((org, key) => (<h1 key={key} className="option__descr">{org.title}</h1>))}
          </div>
        </div>
      )
    }
    }
  }

  const submit = (evn) => {
    evn.preventDefault()
    axios.delete(`https://serene-lowlands-92916.herokuapp.com/tasks/delete/${item.id}`)
    delFunc(item.id)
  }

  return (
    <div className="main__module__block">  
        <div>
          <div className="item__holder">

          <h1 className="item__name">{item.title}</h1>
          <div className="price__button">
            <span className="item__price">price: {item.price}</span>
            <button className="delete__button" onClick={submit}>Delete</button>
          </div>
        </div>
        {moduleChecker()}
        
      </div>
      
    </div>
    
  );
}

export default Moduleslist;
