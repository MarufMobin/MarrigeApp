import React, { useEffect, useState } from 'react';
import CartContainer from '../CartContainer/CartContainer';


import "./Main.css"
const Main = () => {

    const [ user , setCart] = useState([]);

    useEffect(()=>{
        fetch('./userData.JSON')
        .then( res=> res.json())
        .then( data => setCart(data))
    } ,[])


    // use State For handler
     const [ result, setResult ] = useState([])

    const handleClick = (props) =>{
      const  newUser = [...result, props];
           setResult( newUser )
    }
    console.log(result)
    return (
       <div className="main-component">
           <div className="cart-component">
                {
                   user.map( items =>  <CartContainer key={items.id} handleClick={handleClick} items = {items} />)
                }
           </div>
           <div>

            <div className="cart-details">

                    
                    <h2>Invited Familly : {result.length}</h2>
                   
                    <ul>{result.map(elem=><li style={ {"fontSize": "22px" ,"fontWeight":"700px", "listStyle" : "none", "textAlign": "left","marginLeft": "15px","margin":"50px 15px"}}><img src={elem.img} alt="" style={{"width":"80px","height":"80px","borderRadius":"20px 0px 20px 20px","marginLeft":"20px"}}/> {elem.name} </li> )} </ul>


            </div>

           </div>
       </div>
    );
    
};

export default Main;