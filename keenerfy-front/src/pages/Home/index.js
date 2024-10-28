import React, { useContext, useEffect, useState } from 'react';
import Card from "../../components/Card"
import Header from "../../components/Header"
import SearchField from "../../components/SearchField"
import './Home.css'
import api from '../../api';
import { Context } from '../../Context/AuthContext';

const Home = () =>{

    const [product, setProduct] = useState([])

    const handleGetProducts = async () =>{

        await api.get("/products")
        .then(resp =>{
            console.log(resp.data);
            setProduct(resp.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(() =>{
        handleGetProducts()
    }, [])
    
    return (
        <div>
            <Header/>
            <div id="container-list-card">
                <div>
                    <SearchField/>
                </div>
                <section id="list-cards">
                    {product.map(prod => {
                        return <Card
                                key={prod.id}
                                title={prod.name}
                                link={prod.link}
                                description={prod.description}
                                price={prod.price}
                                code={prod.code}
                                />
                    })}
                    
                </section>
            </div>
        </div>
    )
}

export default Home