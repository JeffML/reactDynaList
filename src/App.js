/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState, useEffect } from 'react';

const color = (row) => (row % 2 ? "#C3C4C5" : "#F5F3F3");
var delayCt = 1;
const arr = ["nnn", "ooo", "ppp", "qqq"];

const itemsGenerator = (setItems) => {
  arr.forEach((item) => {
    setTimeout(() => setItems((prevState) => prevState.concat(item)), 1000 * delayCt++)
  })
}

const itemsGenerator2 = (setItems) => {
  var index = 0;
  while (index < arr.length) {
    const thenTime = Date.now()
    while (Date.now() - thenTime < 1000);  // tight wait loop
    const item = arr[index++]
    console.log({ item })
    setItems((prevState) => prevState.concat(item))
  }
}

const itemsGenerator3 = (setItems) => {
  let worker = new Worker('itemsGenerator3.js')
  worker.postMessage('Go!')
  worker.onmessage = e => {
    if (/Kill me.*/.test(e.data)) {
      worker.terminate();
    } else {
      setItems((prevState) => prevState.concat(e.data))
    }
  }
}

function* itemTrueGenerator() {
  var index = 0;
  while (index < arr.length) {
    const thenTime = Date.now()
    while (Date.now() - thenTime < 1000);  // tight wait loop
    const item = arr[index++]
    yield item
  }
}

const itemsGenerator4 = (setItems) => {
  const it = itemTrueGenerator()
  let item = it.next()

  while (!item.done) {
    const itemValue = item.value
    console.log({ itemValue })
    setItems(prevState => {
      console.log({ prevState, itemValue })
      prevState.concat(itemValue)
    }
    )
    console.log('next')
    item = it.next()
  }
}

const MyList = ({ items }) => {
  var i = 0;

  return items.map((item) => {
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
    // itemsGenerator4(setItems)
    itemsGenerator3(setItems)
    //  setTimeout(()=>itemsGenerator2(setItems), 600);
    // itemsGenerator(setItems);
  }, [])


  return (
    <div className="App">
      <header > HOWDY
        <MyList {...{ items }} />
      </header>
    </div>
  );
}

export default App;
