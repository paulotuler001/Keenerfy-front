import React, { useContext } from 'react';
import Header from "../../components/Header";
import { jwtDecode } from "jwt-decode";
import "./NewProduct.css";
import TextField from "../../components/TextField";
import TextFieldBig from "../../components/TextFieldBig";
import Button from "../../components/Button";
import { useState } from "react";
import api from "../../api";
import { Context } from '../../Context/AuthContext';

const NewProduct = () => {
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const { token } = useContext(Context)

  const handleUpload = async (e) => {

    const postData = {
      name,
      code: barcode,
      description,
      price,
      link,
      stock:quantity
    };
    
    const decoded = jwtDecode(token);
    console.log(decoded);


    let userId = decoded.nameid
    try {
      await api.post(`/products/${userId}`, postData);
    } catch (error) {
      console.log(error);
    }

    console.log(userId);
    
  };

  return (
    <div className="container-new-product">
      <div>
        <Header />
      </div>
      <form className="form-new-product" onSubmit={handleUpload}>
        <h1>NEW PRODUCT</h1>
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
              {/* <input
              type="text"
              onChange={e=>setLink(e.target.value)}
              className="input-new-product"
              /> */}
              {/* <p>{filename}</p> */}
              <button type="submit" id='button-upload'>CREATE</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
