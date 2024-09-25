function Mytitle() {
  return (
    <h1>
      Dave's Gallery
    </h1>
  )

}

function Myimage({ items, width, height }) {
  return (
    <>
      <img
        src={items.id}
        alt={items.title}
        width={width}
        height={height}
      />
      <h2>{"This is " + items.name + " the " + items.title}</h2>
    </>


  );


}

export default function App() {
  return (
    <>
      <Mytitle />
      <Myimage
        items={{ name: "Diablo", title: "Lord of Terror", id: "https://bloody-disgusting.com/wp-content/uploads/2018/11/diablo.jpg" }}
        width={700}
        height={500}
      />
      <Myimage
        items={{ name: "Mario", title: "Plumber", id: "https://mario.nintendo.com/static/86bd56fed456e9b642100519880b6a86/b3853/mario.png" }}
        width={500}
        height={500}
      />

      <Myimage
        items={{ name: "Link", title: "Hero of Time", id: "https://www.zeldadungeon.net/wiki/images/thumb/c/ce/Link_-_TotK_art_02_alt.png/400px-Link_-_TotK_art_02_alt.png" }}
        width={500}
        height={500}
      />

      <Myimage
        items={{ name: "Kratos", title: "God of War", id: "https://sm.ign.com/ign_za/review/g/god-of-war/god-of-war-3-remastered-review_ce2s.jpg" }}
        width={800}
        height={500}
      />

      <Myimage
        items={{ name: "Snotty Ragsdale", title: "Boogerman", id: "https://assets-prd.ignimgs.com/2022/05/13/boogerman-1652485864365.jpg" }}
        width={500}
        height={500}
      />

    </>

  );

}



// function SkeletonMan() {
//   return (
//     <img
//       className="skeletonMan"
//       src="https://parade.com/.image/t_share/MjA4MjQwMzM3NzU4NDYzNDI5/jack-skellington.jpg"
//       alt="The Skeleton Man"
//       width={800}
//       height={500}
//     />
//   );

// }



// function SkeletonWar({things, size}) {
//   return (
//     <>
//       <img
//         className="skeletonWar"
//         src={getUrl(things)}
//         alt={getAltText(things)}
//         width={size}
//         height={size}
//       />

//       <h1>
//         {getAltText(things)}
//       </h1>
//     </>


//   );
// }

// function getAltText(things) {
//   return (
//     'This is a picture of ' + things.action + ' and his name is ' + things.name


//   );

// }

// function getUrl(things) {
//   return (
//     'https://theasc.com/imager/uploads/96282/' + things.id

//   );

// }


// export default function App() {
//   return (
//     <>
//     <SkeletonMan />
//     <SkeletonWar  
//         things={{name: "Boney", action: "the skeleton war", id: "Army-of-Darkness-1_6c0c164bd2b597ee32b68b8b5755bd2e.jpg" }}
//         size={400}
//         />
//     </>
//   );

// }


// function myCaption() {
//   return (
//     "This is " + items.name + " the " + items.title

//   );

// }