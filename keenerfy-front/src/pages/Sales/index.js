import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ListTable from "../../components/ListTable";
import api from "../../api";

const Sales = () => {
  const columns = ["name", "code", "quantity"];
  const headers = ["NAME", "BARCODE", "QUANTITY"];

  const [data, setData] = useState([]);

  const handleGetSales = async () => {
    try {
      const response = await api.get("/sales");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    handleGetSales();
  }, []);

  return (
    <div>
      <Header />
      <ListTable
        title="SALES"
        columns={columns}
        data={data}
        headers={headers}
      />
    </div>
  );
};

export default Sales;
