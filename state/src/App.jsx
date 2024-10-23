import { useState } from 'react';

function Counter() {
    const [index, setIndex] = useState(0);
    
    function increment() {
        setIndex(index + 1);
    }

    function decrement() {
        setIndex(index - 1);
    }

    function reset() {
        setIndex(0);
    }
    return(
    <>
    <h1>{index}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
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




// const characterList = [{
//     name: 'Spongebob',
//     house: 'Pineapple',
//     species: 'Sponge'
// }, {
//     name: 'Squidward',
//     house: 'Face',
//     species: 'Squid'
// }, {
//     name: 'Patrick',
//     house: 'Rock',
//     species: 'Starfish'
// }


// ];

// function ThisFunctionWillNotWork() {
//     var index=0;

//     function handleClick() {
//         index = index + 1;
//     }

//     var characters = characterList[index];

//     return (
//         <>
//             <h1> ------------------------ </h1>
//             <button onClick={handleClick}> 
//             Next
//             </button>
//             <h2>
//                 <i>{characters.name}</i> lives in a {characters.house}.
//             </h2>

//             <h3>
//                 ({index + 1} of {characterList.length})
//             </h3>

//             <p>
//                 {characters.name} is a {characters.species}.
//             </p>
//         </>

//     )

// }

// function ThisFunctionWillWork() {
//     const [index, setIndex] = useState(0);

//     function handleClick() {
//         setIndex(index + 1);
//     }

//     var characters = characterList[index];

//     return (
//         <>
//             <h1> ------------------------ </h1>
//             <button onClick={handleClick}> 
//             Next
//             </button>
//             <h2>
//                 <i>{characters.name}</i> lives in a {characters.house}.
//             </h2>

//             <h3>
//                 ({index + 1} of {characterList.length})
//             </h3>

//             <p>
//                 {characters.name} is a {characters.species}.
//             </p>
//         </>

//     )

// }

// function MultipleStates() {
//     const [index, setIndex] = useState(0);
//     const [speciesToClick, setSpeciesToClick] = useState(false);

//     function handleClick() {
//         setIndex(index + 1);
//     }

//     function handleSpeciesClick() {
//         setSpeciesToClick(!speciesToClick);
//     }

//     var characters = characterList[index];

//     return (
//         <>
//             <h1> ------------------------ </h1>
//             <button onClick={handleClick}> 
//             Next
//             </button>
//             <h2>
//                 <i>{characters.name}</i> lives in a {characters.house}.
//             </h2>

//             <h3>
//                 ({index + 1} of {characterList.length})
//             </h3>

//             <button onClick={handleSpeciesClick}>
//                 {speciesToClick ? 'Hide' : 'Show'} species
//             </button>

//                 {speciesToClick && <p> {characters.name} is a {characters.species}.</p>}
            
//         </>

//     )

// }