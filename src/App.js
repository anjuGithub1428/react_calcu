import React, { useState } from 'react'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';

function App() {
  // var vari=0
  
  // var user=true;
  // var username="ann"
  // var age="32"
  // if(user){
  //   return (
  //     <HomePage name={username} age={age}/>
  //   )
  // }
  // else{
  //   return (
  //     <LoginPage/>
  //   )
  // }
  let [vari,setvari]=useState(0)
  let [oprstore,setoprstore]=useState(0)
  let [firstnum,setfirstnum]=useState(0)
  let [newnum,setnewnum]=useState(0)

  let old_num
  function calc(numm)
  {
    setvari((vari == 0 ? "" : vari)+numm)
    setnewnum(newnum+vari)
    if(numm=="=")
    {

      // let total= eval(vari);
      // setvari(vari+"="+total)
 
     
      
      let total;
      console.log(firstnum)
      console.log(vari)
      console.log(oprstore)
       
       
        if(oprstore=='-')
        total=parseInt(firstnum) - parseInt(vari);
            if(oprstore=='/')
            total=parseInt(firstnum) / parseInt(vari);
            if(oprstore=='*')
            total=parseInt(firstnum) * parseInt(vari);
              if(oprstore=='+')
        total=parseInt(firstnum) + parseInt(vari);
                       

      
      setvari(total)
      console.log(total)
       

    }
    if(numm=="c")
    {
      setvari(0)
    }
    if(numm=="+")
    {  
      setfirstnum(vari)  
      setvari(0)  
      setoprstore("+")  

    }
    if(numm=="*")
    {  
      setfirstnum(vari)  
      setvari(0)  
      setoprstore("*")  

    }
    if(numm=="-")
    {  
      setfirstnum(vari)  
      setvari(0)  
      setoprstore("-")  

    }
    if(numm=="/")
    {  
      setfirstnum(vari)  
      setvari(0)  
      setoprstore("/")  

    }
  }


  
  return (

    <div><h1>{vari}</h1>
      <button onClick={()=>calc("1")} >1</button>
       <button onClick={()=>calc("2")}>2</button>
       <button onClick={()=>calc("3")}>3</button>
       <button onClick={()=>calc("4")}>4</button>
       <br></br>
       <button onClick={()=>calc("5")}>5</button>
       <button onClick={()=>calc("6")}>6</button>
       <button onClick={()=>calc("7")}>7</button>
       <button onClick={()=>calc("8")}>8</button>
       
       <br></br>
       <button onClick={()=>calc("9")}>9</button>
       <button onClick={()=>calc("0")}>0</button>
       <button onClick={()=>calc("+")}>+</button>
       <button onClick={()=>calc("-")}>-</button>
       <br></br>
       <button onClick={()=>calc("/")}>/</button>
       <button onClick={()=>calc("*")}>*</button>
       <button onClick={()=>calc("=")}>=</button>
       <button onClick={()=>calc("c")}>C</button>
       </div>

  )
}

export default App