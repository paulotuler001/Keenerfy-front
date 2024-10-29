import React, { useContext, useEffect } from 'react';
import Header from "../../components/Header";
import { jwtDecode } from "jwt-decode";
import "./EditProduct.css";
import TextField from "../../components/TextField";
import TextFieldBig from "../../components/TextFieldBig";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../api";
import { Context } from '../../Context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const { token } = useContext(Context)
  const { id } = useParams();
  const nav = useNavigate();

  const handleUpload = async (e) => {

    const putData = {
      name,
      code: barcode,
      description,
      price,
      link,
      stock:quantity
    };
    
    try {
      await api.put(`/products`, putData);
    } catch (error) {
      console.log(error);
    }
    
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await api.get(`/products/by-code/${id}`);
        setBarcode(response.data.code)
        setName(response.data.name)
        setPrice(response.data.price)
        setQuantity(response.data.stock)
        setLink(response.data.link)
        setDescription(response.data.description) 
      } catch (error) {
        console.error(error);
      }
    };

    getDetails();
  }, [id]);


  return (
    <div className="container-new-product">
      <div>
        <Header />
      </div>
      <form className="form-new-product" onSubmit={handleUpload}>
        <h1>EDIT PRODUCT</h1>
        <hr className="custom-hr" />
        <div id="first-block-text-field">
          <div className="sub-container-text-field">
            <TextField
              label="BARCODE"
              required={true}
              value={barcode}
              placeholder={"ex:AB213"}
              onChange={(e) => setBarcode(e.target.value)}
            />
            <TextField
              label="PRICE"
              required={true}
              value={price}
              type={"number"}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="sub-container-text-field">
            <TextField
              label="NAME"
              required={true}
              maxlength='21'
              value={name}
              placeholder={"ex:Kenner VIP DELUXE"}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="QUANTITY"
              value={quantity}
              required={true}
              type={"number"}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
        <div id="second-block-text-field">
          <TextFieldBig 
          label="DESCRIPTION" 
          required={true} 
          placeholder={"ex: Nice flip flop to get rid of your old ones"}
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          />
        </div>
        <div id="third-block-photo-field">
          <div id="form-new-product">
            <img src={"/images/kenner-black.png"} alt="aa" className="img-new-product"/>
            <div id="container-upload">
              <button type="submit" id='button-upload'>EDIT</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
