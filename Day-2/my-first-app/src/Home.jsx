import React from 'react'

function Home() {
  let a = 10;
  let b = 15;

  function saveClick() {
    alert("save Clicked!!!")
  }
  
  const obj = { name:"Logesh", age:32};
  return (
    <>
    <div>Welcome to Home Component!!</div><br></br>
    <button onClick={saveClick}>Save</button>
    <div>
    <div>Name: {obj.name}</div> 
    <span>Age: {obj.age}</span>
    {console.log("I am a very confused Guy!!")}
    </div><br></br>
    <label htmlFor='name'>Name: </label>
    <input type="text" id="name" placeholder='Type Here' />
    </>
  )
}

export default Home