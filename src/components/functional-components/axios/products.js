import axios from "axios"

const ProductsApi =()=>{

    const fetchData = async ()=>{
        //hit the server using axios
        // axios.get("https://fakestoreapi.com/products")
        // .then(response=>console.log(response))
        // .catch(err=>console.log(err))

    //    const result =await axios.get("https://fakestoreapi.com/products")
    //    console.log(result)

      let response1= await fetch("https://fakestoreapi.com/products") 
      let finalResponse= await response1.json() 
      console.log(finalResponse)
          

        //  hit the server using fetch 
        // fetch("https://fakestoreapi.com/products")
        // .then(response=>response.json())
        // .then(response=>console.log(response))
    }
    return(
        <>
        
   <button  onClick={fetchData} >Fetch Data</button>

        </>
    )
}

export default ProductsApi






// Tasks :

// 1. Repeat the class 
// 2. Download postman 
// 3. Collect 5 open api and test in postman 
// 4. hit the api in the class based components , and show list of products 
// 5. 5 examples on promises and async ans await 
