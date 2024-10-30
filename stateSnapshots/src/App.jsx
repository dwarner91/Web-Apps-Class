import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  var pressed = 0;
  
  return(
    <>
  <h1>{counter}</h1>
  <button onClick = {() => {
    ++pressed;
    console.log(counter);
    setTimeout(() => {
    setCounter(counter + pressed);
    console.log(counter + pressed);
    }, 2000);
  }}>Increment</button>
  </>
  )
}


export default function App() {
  return (
    <>
      <Counter />
    </>
  )
}














// function HowManyTrees() {
//   const [trees, setTrees] = useState(0);

//   return (
//     <>
//       <h1>How many trees? {trees} trees.</h1>
//       <button onClick = {() => {
//         setTrees(trees + 1);
//         setTrees(trees + 1);
//         setTrees(trees + 1);
//       }}>+3</button>
//     </>
//   );
// }

// function HowManyCats() {
//   const [cats, setCats] = useState(0);

//   return (
//     <>
//       <h1> How many cats? {cats} casts.</h1>
//       <button onClick={() => {
//         setCats(cats + 5);
//         alert(cats);
//       }}>+5</button>
    
//     </>

//   );
// }

// function HowManyShoes() {
//   const [shoe, setShoe] = useState(0);

//   return(
//       <>
//         <h1>How many shoes? {shoe} shoes.</h1>
//         <button onClick={() => {
//           setShoe (shoe + 5);
//           setTimeout(() => {
//             alert(shoe);
//             }, 3000);
//             }}>+5</button>
//       </>
//   )
  
// }

// export default function App() {
//     return (
//       <>
//       <HowManyTrees />
//       <HowManyCats />
//       <HowManyShoes />
//       </>
//     );
// }