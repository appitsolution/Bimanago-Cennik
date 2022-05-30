import React, { useState, useEffect }from 'react';
import './LeftSide.css'
import Rightside from '../RightSide/RightSide';
import axios from 'axios'
import ChooseModules from './ChooseModules'

const LeftSide = ({count, slide}) => {
  
  const [arrayActive, setArrayActive] = useState([])
  const listActive = (obj) => {
    const edit = []
    arrayActive.forEach((num) => {
      if (num.key === obj.key) {
        if (num.status === obj.status) {
          if (num.indexButton !== obj.indexButton) {
            edit.push(obj)
            
          } else {
            
            edit.push(num)
          }
          return
        } else {
          edit.push(obj)
          return
        }
      }
        edit.push(num)
    })
    setArrayActive(edit)
  }
  const [module, setModule] = useState([])
  const response = async () => {
    const { data } = await axios.get('https://dolineofactory.grupaww.jchost09.pl/wp-json/acf/v3/pages/2597');
    setModule([...data.acf.modul])
    const test = []
    data.acf.modul.forEach(num => {
      test.push({ key: num.id, status: false, indexButton: 0, data: num })
    })
    setArrayActive(test)
  }

  useEffect(() => {
    response()
  }, [])

  return (
    <div className='blocks__container'>

      <div className="choose__modules">
        <h1 className="main__caption">Wybierz moduły</h1>
        <div className='panel__holder'>
          {module.map((num, key) => (
            <ChooseModules data={num} editStatus={listActive} key={key}/>
          ))}
        </div>
      </div>

      <Rightside
        activeEl={arrayActive}
        counter={count}
        slide={slide}
      />

    </div>
  );
}

export default LeftSide;

