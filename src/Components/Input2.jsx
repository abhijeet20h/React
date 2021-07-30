import React, { useState } from 'react'


export default function Input2() {
    const [name , setName ]= useState(" ");
    const [FullName , setFullName ]= useState(" ");

    const [passname , setPassName ]= useState(" ");
    const [passnamenew , setPassNameNew ]= useState(" ");


  const inputValue= (e)=> {
      console.log(e.target.value)
      setName(e.target.value)
  }
  const inputPassValue=(e)=>{
    setPassName(e.target.value)
  }
  const onSubmits =(e)=>{
      e.preventDefault();
    setFullName(name)
    setPassNameNew(passname)
  }
  
    return (
        <>
        <form onClick={onSubmits}>
        <div className="card " style={{width : '300px' , margin : '100px  auto'}}>
        <h1 className="p-4">Hello , {FullName} {passnamenew} </h1>
        <input type="text" onChange={inputValue} value={name} placeholder="Enter your Name " className="p-2 m-2" />
        <input type="text" onChange={inputPassValue} value={passname} placeholder="Enter your Pass " className="p-2 m-2" />

        <button type="submit" className="btn btn-danger m-3"> Click Me 🔥</button>
            
        </div>
        </form>
        </>
    )
}
