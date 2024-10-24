import React, { useEffect, useState } from 'react';
import Button from "../../components/Button"
import Header from "../../components/Header"
import './ProductDetails.css'
import { useParams } from 'react-router-dom';
import api from '../../api';

const ProductDetails = (props) =>{

    const { id } = useParams();
    const [details, setDetails] = useState([])
    
    useEffect(() => {
        const fetchDetails = async () => {
          try {
            const response = await api.get(`/products/by-code/${id}`);
            setDetails(response.data); 
          } catch (error) {
            console.error('Erro ao buscar detalhes:', error);
          }
        };
    
        fetchDetails();
      }, [id]);

    return (
        <div className="container-new-product">
            <div>
                <Header/>
            </div>
            <form className="form-product-detail">
                <h1>{details.name}</h1>
                <hr className="custom-hr"/>
                <div id="product-detail-block">
                    <div id="img-detail-block">
                        <img src="/images/kenner-shrek.png" alt="shrek's best flip flop"/>
                    </div>
                    <div>
                        <h1>R${details.price}</h1>
                        <p>{details.description}</p>
                        <Button button="BUY"/>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default ProductDetails