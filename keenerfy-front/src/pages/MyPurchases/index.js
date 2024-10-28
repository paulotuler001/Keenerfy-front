import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import ListTable from "../../components/ListTable";
import api from '../../api';
import { jwtDecode } from 'jwt-decode';

const MyPurchases = () => {

    const columns = ['name', 'code', 'quantity'];
    const headers = ['NAME', 'BARCODE', 'QUANTITY']

    const [data, setData] = useState([])

    const handleGetMyPurchases = async () =>{

        let token = localStorage.getItem('token')
    
        const decoded = jwtDecode(token);
        let userId = decoded.nameid
        console.log(userId);
        
        await api.get(`/sales/${userId}`)
        .then(resp =>{
            console.log(resp.data);
            setData(resp.data)
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(() => {
        handleGetMyPurchases()
    }, [])

return (
    <div>
        <Header/>
        <ListTable title="MY PURCHASES" columns={columns} data={data} headers={headers}/>
    </div>
)
}

export default MyPurchases