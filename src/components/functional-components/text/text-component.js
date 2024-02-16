



const TextComponent =({title,textColor})=>{
    console.log(title,textColor)

    return(
        <h4 style={{color:textColor}}  >{title}</h4>
    )
}
export default TextComponent