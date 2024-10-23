import Header from "../../components/Header"
import './NewProduct.css'
import TextField from '../../components/TextField'
import TextFieldBig from "../../components/TextFieldBig"

const NewProduct = () =>{
    return (
        <div className="container-new-product">
            <div>
                <Header/>
            </div>
            <form className="form-new-product">
                <h1>NEW PRODUCT</h1>
                <hr className="custom-hr"/>
                <div id="first-block-text-field">
                        <div className="sub-container-text-field">
                            <TextField label="NAME"/>    
                            <TextField label="CPF"/>    
                        </div>    
                        <div className="sub-container-text-field">
                            <TextField label="LASTNAME"/>    
                            <TextField label="EMAIL"/>    
                        </div>    
                </div>
                <div id="second-block-text-field">
                    <TextFieldBig label="DESCRIPTION"/>
                </div>
                <div id="third-block-photo-field">
                    <img src="/images/kenner-pink.png" alt="aa"/>
                    <TextField label="PHOTO"/>
                </div>
            </form>
        </div>
    )
}

export default NewProduct