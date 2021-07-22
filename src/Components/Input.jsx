import React, { useState } from 'react'


export default function Input() {
    const [name , setName ]= useState(" ");
    const [FullName , setFullName ]= useState(" ");

  const inputValue= (e)=> {
      console.log(e.target.value)
      setName(e.target.value)
  }
  const onSubmiteData =(e)=>{
    setFullName(name)
  }
    return (
        <>
        <div className="card " style={{width : '300px' , margin : '100px  auto'}}>
        <h1 className="p-4">Hello , {FullName} </h1>
        <input type="text" onChange={inputValue} placeholder="Enter your Namev " className="p-2" />
        <button onClick={onSubmiteData} className="btn btn-success m-3"> Click Me 🔥</button>
            
        </div>
        </>
    )
}
