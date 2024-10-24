import React, { useEffect, useState } from 'react';
import Card from "../../components/Card"
import Header from "../../components/Header"
import SearchField from "../../components/SearchField"
import './Home.css'
import api from '../../api';

const Home = () =>{

    const [product, setProduct] = useState([])

    /**?{
        id: 0,
        code: "",
        name: "",
        description: "",
        price: 0.0,
        link: ""
    } */

    const handleGetProducts = async () =>{
        const response = await api.get("/products")
        setProduct(response.data)
        console.log(response.data);
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