import './App.css';
import { useRef, useState, useEffect } from 'react';

const color = (row) => (row % 2 ? "#C3C4C5" : "#F5F3F3");

const itemsGenerator  = (setItems) => {
  ["nnn", "ooo", "ppp"].forEach((item) => {
    console.log({item})
    // setItems(prevState => prevState)
    setTimeout(()=>setItems((prevState) => prevState.concat(item)), 1000)
  })
}

const MyList = ({items}) => {
  var init = true;
  var i = 0;


  // <div className="row" display={init}>Working...</div>;

  return items.map((item) => {
    init = false;
    return <div
      className="row"
      style={{
        maxHeight: "3.4rem",
        color: "black",
        backgroundColor: color(i++),
      }}
      key={item}
    >
      <div className="column">
        <span>{item}</span>
        <br></br>
      </div>
    </div>
  });
}


function App() {
  const [items, setItems] = useState(['x', 'y']);

  useEffect(() => {
     itemsGenerator(setItems);
  }, [])


  return (
    <div className="App">
      <header > HOWDY
        <MyList {...{items}}/>
      </header>
    </div>
  );
}

export default App;
