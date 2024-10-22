import ButtonHeader from '../ButtonHeader'
import './Header.css'

function Header(){
    return (
            <div className='container-header'>
                <header>
                    <div id="img-container">
                        <img src="/images/keener.fy.png" alt="icon from header of the page"/>
                    </div>
                    <div id="options-container">
                        <ButtonHeader name="HOME"/>
                        <ButtonHeader name="MY PURCHASES"/>
                        <ButtonHeader name="NEW PRODUCT"/>
                        <ButtonHeader name="SALES"/>
                        <ButtonHeader name="STOCK"/>
                    </div>
                    <div id="user-container">
                        <div>
                        <i class="fas fa-user"></i>
                        <p>YOUR USERNAME</p>
                        </div>
                        <i class="fas fa-sign-out"></i>

                    </div>
                        
                </header>
            </div>
    )
}

export default Header