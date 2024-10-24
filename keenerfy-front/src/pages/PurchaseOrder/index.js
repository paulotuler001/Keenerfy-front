import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import ListTable from "../../components/ListTable";
import api from '../../api';

const PurchaseOrder = () =>{
    const columns = ['name', 'price', 'quantity'];
    const headers = ['NAME', 'PRICE', 'QUANTITY']

    const [data, setData] = useState([])

    const handleGetPurchaseOrders = async () =>{

        const response = await api.get("/purchase-order");
        setData(response.data)
        console.log(response.data);
    }

    useEffect(() => {
        handleGetPurchaseOrders()
    }, [])
    return (
        <div>
            <Header/>
            <ListTable title="PURCHASE ORDER" columns={columns} data={data}/>
        </div>
    )
}

export default PurchaseOrder