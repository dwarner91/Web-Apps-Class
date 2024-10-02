
function CheckHour ({currentHour}) {
  if ((currentHour >= 6) && (currentHour <=12)) {return <h1 style={{color: 'orange'}}>
  "Good Morning!" 
  </h1>}
  else if ((currentHour > 12) && (currentHour <=18)) {return <h1 style={{color: 'blue'}}>
  "Good Afternoon!" 
  </h1>}
  else if ((currentHour > 18) && (currentHour <=24)) {return <h1 style={{color: 'purple'}}>
  "Good Evening!" 
  </h1>}
  else {return <h1 style={{color: 'darkblue'}}>
  "Good Night!" 
  </h1>}
}

export default function MyGreeting() {
  return (
      <CheckHour
        currentHour = {13}
      />
  )

}

// function GoodMorning () {
//   return (
//     <h1 style={{color: 'orange'}}>
//     "Good Morning!" 
//     </h1>
//   )
// }

// function GoodAfternoon () {
//   return (
//     <h1 style={{color: 'blue'}}>
//     "Good Afternoon!" 
//     </h1>
//   )
// }

// function GoodEvening () {
//   return (
//     <h1 style={{color: 'purple'}}>
//     "Good Evening!" 
//     </h1>
//   )
// }

// function GoodNight () {
//   return (
//     <h1 style={{color: 'darkblue'}}>
//     "Good Night!" 
//     </h1>
//   )
// }

