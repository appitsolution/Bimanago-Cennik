import React, { useState } from 'react';

const Test = ({ data, editStatus }) => {

  

  const [activeButton, setActiveButton] = useState(false);
  const onActiveButton = () => {
    setActiveButton(!activeButton);
    editStatus({key: data.id, status: !activeButton, indexButton: activeItem, data})
  }

  const [activeItem, setActiveItem] = useState(0);
  const onActiveItem = (test) => {
    setActiveItem(test);
    editStatus({ key: data.id, status: activeButton, indexButton: test, data });
  }

  return (
    <>
      <div className="parent" key={data.id}>
          <h1 className='undercaption' >{data.title}</h1>
          <div className="title__row">  
            <p className="description">{data.description}</p>
            <div className="switcher">
              <button className={activeButton ? "position__right" : "position__left"}
                      onClick={onActiveButton}>
              <div className="round__switcher"></div>
              </button>
            </div>
          </div>
          <ul className = 'buttons'>
          {data.options.length !== 0 && data.options.map((item, test) => (

              <li
                key={`${item}_${test}`}
                className= {activeItem === test ? 'active__pick' : 'disabled__pick'}
                onClick = {() =>  onActiveItem(test)}
                >   
                {item.title}
              </li>
            )
            )
            
          }
          </ul>

        </div>
    </>
  );
}

export default Test;
