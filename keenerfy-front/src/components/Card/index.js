import React from 'react';
import './Card.css'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
   
    const nav = useNavigate();

    const handleGetDetail = () =>{
        nav(`/product-details/${props.code}`)
    }

    return (
            <div className='container-card'>
                <article>
                    <img src={'/images/kenner-ugly.png'} alt='ben10 kenner'></img>
                    <div id="text-box">
                        <h2>{props.title}</h2>
                        <h2>R${props.price}</h2>
                    </div>
                        <h4 onClick={handleGetDetail}>See more</h4>
                </article>
            </div>
    )
}

export default Card