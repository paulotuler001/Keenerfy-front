import React, { useContext, useEffect, useState } from 'react';
import Card from "../../components/Card"
import Header from "../../components/Header"
import SearchField from "../../components/SearchField"
import './Home.css'
import api from '../../api';
import { Context } from '../../Context/AuthContext';

const Home = () =>{

    let [product, setProduct] = useState([])
    const [search, setSearch] = useState('')

    const handleGetProducts = async () =>{

        await api.get("/products")
        .then(resp =>{
            console.log(resp.dta);
            setProduct(resp.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    const handleSearch = (e) =>{
        setSearch(e)
    }

    product = product.filter((prod) =>
        prod.name.toLowerCase().includes(search.toLowerCase())
      );

    useEffect(() =>{
        handleGetProducts()
    }, [])
    
    return (
        <div>
            <Header/>
            <div id="container-list-card">
                <div>
                    <SearchField value={search} onChange={e=> handleSearch(e.target.value)}/>
                </div>
                <section id="list-cards">
                    {product && product.length > 0 ?                     
                    product.map(prod => {
                        return <Card
                                key={prod.id}
                                title={prod.name}
                                link={prod.link}
                                description={prod.description}
                                price={prod.price}
                                code={prod.code}
                                />
                    })
                    :
                    <h1 id='no-results'>0 results shown</h1>
                }
                </section>
            </div>
        </div>
    )
}

export default Home