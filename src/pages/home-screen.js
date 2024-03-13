import Header from "../components/functional-components/navBar/header"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Spinner from "../components/functional-components/spinner/spinner";
import useAxios from "../components/functional-components/hooks/customHook/useAxios";
import { BASE_PROD_URL, endPoints } from "../endpoints/endPoints";
import UseEffect5 from "../components/functional-components/hooks/useEffect/useEffectEX5";
import { useEffect, useState } from "react";



const HomeScreen = () => {
    const [data] = useAxios(`${BASE_PROD_URL}${endPoints.products}`)
    const [day,setDay]=useState(null)
  useEffect(()=>{
    setDay(getGreeting())
    // 0-23
    // setDay(getToday())
  },[])

    function getToday (){
        let day;
        console.log(new Date().getDay())

        switch(new Date().getDay()){
            case 0:
                day="SUNDAY"
                break
            case 1:
                day="MONDAY"
                break
            case 2:
             
                day="TUESDAY"
                break
            default :
              day=null

        }
        return day

    }
  
    function getGreeting(){
        const timeInHours=new Date().getHours()
       let greeting;
        if(timeInHours>6 && timeInHours<11){
            greeting="GOOD MORNING"
        }else if(timeInHours>=11 && timeInHours<16){
            greeting="GOOD AFTERNOON"
        }else if(timeInHours>=16 && timeInHours<18){
            greeting="GOOD EVENING"
        }else{
            greeting="GOOD NIGHT"
        }
        return greeting
    }

    return (
        <>
            <Header />

            {

                data.length > 0
                    ?
                    data.map((eachObject) => {
                        return (
                            <>
                            <h2>{day}</h2>
                                <CustomCard data={eachObject} />
                            </>
                        )
                    })
                    :
                    <Spinner />
            }

        </>
    )
}
export default HomeScreen





function CustomCard(props) {
    const { data: { image, category, price, description, title, id } } = props
    const handleClick = () => {

    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} style={{ width: 100 }} height={100} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

                <button>
                    <Link to={`/${category}/${id}`}  >
                        Navigate
                    </Link>

                </button>





            </Card.Body>
        </Card>
    );
}



// Tasks:
// 1. Repeat the class (dynamic routing)
// 2. complete all the pending work 
// 3. ui for login , home screen ,  product 







