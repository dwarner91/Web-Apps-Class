const movies = [
  { id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  { id: 2, title: 'The Godfather', genre: 'Crime', rating: 9.2 },
  { id: 3, title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
  { id: 4, title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
  { id: 5, title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
  { id: 6, title: 'The Lion King', genre: 'Animation', rating: 8.5 },
];



function Movielist() {
  const listItems = movies.map(movie => 
    <li key={movie.id}>
      <b>{movie.title}</b>
      {' ('} {movie.genre} {') - Rating: '}
      {movie.rating}
      </li>
      );

      return (
      
      <ul>{listItems}</ul>

      )

}

function Genre() {
  const listItems = movies.map(movie => 
    <li key={movie.id} style = {{color: movie.genre === 'Sci-Fi'?'red':'black'}}>
      <b>{movie.title}</b>
      {' ('} {movie.genre} {') - Rating: '}
      {movie.rating}
      </li>
      );

      return (
      
      <ul>{listItems}</ul>

      )

}

function Oscars() {

  
  const oscar = movies.filter(winner => 
    winner.rating >= 8.8
  );

  const listItems = oscar.map(winner => 
    <li key={winner.id}>
      <b>{winner.title}</b>
      {' ('} {winner.genre} {') - Rating: '}
      {winner.rating}
      </li>
      );

      return (
      
      <ul>{listItems}</ul>

      )

}



export default function App() {
  return (
    <>
    <Movielist />
    <Genre />
    <Oscars />
    </>
  );

}


















































// function BasicList() {
//   return (
//     <ul>
//       <li>Spongebob: Sponge</li>
//       <li>Patrick: Starfish</li>
//       <li>Squidward: Squid</li>
//       <li>Mrs. Squarepants: Sponge</li>
//       <li>Mr. Star: Starfish</li>
//     </ul>


//   );

// }

// function BasicConst() {
//   const characters = [
//     'Spongebob: Sponge',
//     'Patrick: Starfish',
//     'Squidward: Squid',
//     'Mrs. Squarepants: Sponge',
//     'Mr. Star: Starfish',

//   ];

//   const listItems = characters.map(theCharacter => 
//     <li>
//       {theCharacter}
//     </li>);

//     return (
//       <ul>{listItems}</ul>
//     );

// }

// function UsingAFilter () {
//   const characters = [{
//     id: 0,
//     name: 'Spongebob',
//     species: 'Sponge', 
//   },
//   {
//     id: 1,
//     name: 'Patrick',
//     species: 'Starfish',
//   },
//   {
//     id: 2,
//     name: "Squidward",
//     species: "Squid",
//   },
//   {
//     id: 3,
//     name: 'Mrs. Squarepants',
//     species: 'Sponge',
//   },
//   {
//     id: 4,
//     name: 'Mr. Star',
//     species: 'Starfish',
//   }
// ]

//   const starfish = characters.filter(filteredCharacter => 
//     filteredCharacter.species === 'Starfish'
//   );

//   const listItems = starfish.map(filteredCharacter => 
//     <li key={filteredCharacter.id}>
//       <b>{filteredCharacter.name}</b>
//       {' '} is known to be a {' '}
//       {filteredCharacter.species}
//       </li>
//       );

//       return (
      
//       <ul>{listItems}</ul>

//       )
      

// }

// export default function App() {

//     return (
//       <>
//         <BasicList />
//         <BasicConst />
//         <UsingAFilter />
//       </>

//     );


// }