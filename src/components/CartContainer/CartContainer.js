import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './CartContainer.css'

const CartContainer = (props) => {

    const { name, relationship, age, expectedPersonsOfComing,address,img} = props.items;
      // font FontAwesomeIcon 
    const icon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className="cart">
            <img className="broom" src={img} />
           <h3 className="text-des"> {name}</h3>
           <h5>Age: {age}</h5>
           <h5>Address: {address}</h5>
           <h5>Relationship : {relationship}</h5>
           <h5>Expected Persons of Coming : {expectedPersonsOfComing}</h5>
            <button onClick={() => props.handleClick(props.items)} className="button-marrige">
               {icon} { }invited 
            </button>
        </div>
    );
};

export default CartContainer;