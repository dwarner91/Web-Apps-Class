function Button1() {
    function handleClick() {
      alert('You created an alert.');
  }
  return (
    <button onClick={handleClick}>
      Click me to create an alert!
    </button>
  );
}

function Button2() {
  function handleClick() {
    console.log('You created a console log.');
  }
  return (
    <button onClick={handleClick}>
      Click me to create a console log!
    </button>
  )
}

function Button3() {
  function handleClick(event) {
    event.target.disabled = true;
    event.target.innerText = "I'm disabled!";
  }
  return (
    <button onClick={handleClick}>
      Click me to disable me and change my text!
    </button>
  )

}

function Button4() {
  function handleClick() {
    alert('You created an alert.');
}
return (
  <button onDoubleClick={handleClick}>
    Doubleclick me to create an alert!
  </button>
);
}

export default function App() {
  return(
  <>
    <Button1 />
    <Button2 />
    <Button3 />
    <Button4 />
  </>
  );
}

// function ImAButton() {
//   return (
//     <button>
//       I am a button!
//     </button>
//   );


// }

// function ButtonWithHandler() {
//   function handleClick() {
//       alert('Good choice.');
//   }
//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );

// }

// function EventHandlerProp({message, children}) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>

//   );


// }

// {/* event handlers as props */}
// function EventHandlersAsPropsButton ({onClick, children}) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayTheMovie({movie}) {
//   function handlePlayClick() {
//     alert(`${movie} is my favorite!`);
//   }

//   return (
//     <EventHandlersAsPropsButton onClick={handlePlayClick}>
//      Play "{movie}" 
//     </EventHandlersAsPropsButton>
//   );
// }

// function UploadYourImage() {
//   return (
//     <EventHandlersAsPropsButton onClick={() => alert('Thank you, give me your headshot')}>
//       Press me to give me the image!
//     </EventHandlersAsPropsButton>
//   );

// }

// {/* end of event handlers as props */}



// {/* Custom handler names */}
//   function CustomHandlerNameButton({onClick, children}){
//     return(
//       <button onClick={onClick}>
//         {children}
//       </button>
//     );
//   }

//   function TheGoods({onPlayShrek, onUploadHeashot}){
//     return (
//       <div>
//         <CustomHandlerNameButton onClick={onPlayShrek}>
//           Watch Shrek!
//         </CustomHandlerNameButton>
//         <CustomHandlerNameButton onClick={onUploadHeashot}>
//           Let me make fun of your photo!
//         </CustomHandlerNameButton>
//       </div>
//     );
//   }


// {/* end of custom handler names */}

// export default function App() {
//     return (
//       <>
//         <ImAButton />
//         <ButtonWithHandler />
//         <div>
//         <EventHandlerProp message="You pressed the button!">
//           Press the button?
//         </EventHandlerProp>
//         <EventHandlerProp message="Good job!">
//           Or not?
//         </EventHandlerProp>
//         </div>  
//         <div>
//           <PlayTheMovie movie="Shrek" />
//           <UploadYourImage />
//         </div>
//         <TheGoods
//           onPlayShrek={() => alert('A cinematic masterpiece')}
//           onUploadHeashot={() => alert('This is an ok photo')}
//         />
//       </>
//     );
// }