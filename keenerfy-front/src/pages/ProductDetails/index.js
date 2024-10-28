import React, { useContext, useEffect, useState } from 'react';
import Button from "../../components/Button"
import Header from "../../components/Header"
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api';
import { Context } from '../../Context/AuthContext';
import { jwtDecode } from 'jwt-decode';

const ProductDetails = (props) =>{

    const { id } = useParams();
    const [details, setDetails] = useState([])
    const { token } = useContext(Context)
    const nav = useNavigate()
    
    const handleBuy = async () =>{
        const postData = {
            ProductCode:details.code,
            quantity: 1
        }

        const decoded = jwtDecode(token)
        const userId = decoded.nameid

        try {
            await api.post(`/sales/${userId}`, postData)            
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = () =>{
        nav(`/edit-product/${details.code}`)
    }

    useEffect(() => {
        const getDetails = async () => {
          try {
            const response = await api.get(`/products/by-code/${id}`);
            setDetails(response.data); 
          } catch (error) {
            console.error(error);
          }
        };
    
        getDetails();
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
                        <div id='edit-button'>
                            <Button button="BUY" onClick={handleBuy}/>
                            <Button button="EDIT" onClick={handleEdit}></Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default ProductDetails