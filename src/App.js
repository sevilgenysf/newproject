import React, {useEffect, useState} from 'react';

const App = (props) =>{
  const [data, setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3400/')
    .then((res) => res.json())
    .then((data) =>setData(data));
  }, []);
  return (
    <div>
        {data.map((item) => {
          return <div>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.id}</p>
          </div>
        })}
    </div>
  )
}


export default App;


