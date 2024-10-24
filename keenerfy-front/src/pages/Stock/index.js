import React, { useEffect, useState } from 'react';
import ListTable from '../../components/ListTable'
import Header from '../../components/Header'
import './Stock.css'
import api from '../../api';

const Stock = () =>{

    const columns = ['name', 'stock', 'price'];
    const headers = [ 'NAME', 'QUANTITY', 'PRICE']
    const [data, setData] = useState([])

    const handleGetStock = async () =>{

        const response = await api.get("/products");
        setData(response.data)
        console.log(response.data);
        
    }

    useEffect(() => {
        handleGetStock()
    }, [])

    return (
        <div>
            <Header/>
            <ListTable title="STOCK" columns={columns} data={data} headers={headers}/>
        </div>
    )
}

export default Stock