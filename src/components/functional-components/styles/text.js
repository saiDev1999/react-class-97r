import styles from "./text.module.css"



const FancyText =()=>{
    const objectStyling={
        
            color:"red",
            backgroundColor:"black"
        

    }
    return(
        <div>
        <h5 style={objectStyling}   >hello</h5>
        <h5  className="text"   >good afternoon</h5>
        <h5 className={styles.hello} >External module styles</h5>
        </div>
    )
}

export default FancyText



// Ways to style react application 
// 4 ways :

// 1. Inline styling  or object styling 
// 2. External styling ()
// 3. External module styling 
// 4. Sass styling (bootsrap,taiwind css)


// bootsrap installation : 

// 1. CDN links 
// 2. Install via npm package 

// npm--> node package manager --> it is container for all the open source package or dependencies 

