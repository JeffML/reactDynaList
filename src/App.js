import './App.css';
import { useRef } from 'react';

const color = (row) => (row % 2 ? "#C3C4C5" : "#F5F3F3");

// function* yieldItem(index = 0) {
//   const items = ["abc", "def", "ghi"]
//   var si;

//   if (index < items.length) {
//     yield items[index]
//     console.log('foo', index)
//   } else {
//     console.log('bar')
//     return
//   }

//  setTimeout(function* () {
//     console.log('flum')
//     yield* yieldItem(index++)
//   }, 1000);
// }

const MyList = ({ items }) => {
  var init = true;
  var item;
  var i = 0;

  <div className="row" display={init}>Working...</div>;

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
  // const gen = useRef(yieldItem())

  return (
    <div className="App">
      <header > HOWDY
        <MyList {...{ items: ['a', 'b', 'c'] }} />
      </header>
    </div>
  );
}

export default App;
