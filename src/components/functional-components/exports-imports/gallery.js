

export function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }

  export function Profile1() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  export function Profile2() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }


  
 function Hello() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  export default Hello


//   for one .js file we can create as many components 

// 2 ways of exports 

// 1. default export (only one in a module or file)
// 2. named export (we can export as many)


// imports diff 
// curly braces used for named export
// no braces used for default export 

// default exports can be called with any name