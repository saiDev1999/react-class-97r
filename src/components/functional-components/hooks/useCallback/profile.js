import { useCallback, useState } from "react"
import CustomButtom from "./custom-button"






const ProfileExample = ()=>{
    const[age,setAge]=useState(100)
    const[salary,setSalary]=useState(1000)

    const handleAge=useCallback(()=>{
        setAge(age+10)  
      },[age])

    const handleSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

    return(
        <>

        <h1>Salary {salary}</h1>
        <h1>Age {age}</h1>

        <CustomButtom onClick={handleAge}   >
            Age increment
        </CustomButtom>

        <CustomButtom onClick={handleSalary} >
        Salary increment
        </CustomButtom>


        
        
        </>
    )
}

export default ProfileExample