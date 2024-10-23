import Button from "../../components/Button"
import Header from "../../components/Header"
import './ProductDetails.css'

const ProductDetails = () =>{
    return (
        <div className="container-new-product">
            <div>
                <Header/>
            </div>
            <form className="form-product-detail">
                <h1>PRODUCT NAME</h1>
                <hr className="custom-hr"/>
                <div id="product-detail-block">
                    <div id="img-detail-block">
                        <img src="/images/kenner-shrek.png" alt="shrek's best flip flop"/>
                    </div>
                    <div>
                        <h1>R$100.99</h1>
                        <p>THIS IS AN AUTHENTIC PRODUCT CREATED BY KEENER.FY COMPANY</p>
                        <Button button="BUY"/>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default ProductDetails