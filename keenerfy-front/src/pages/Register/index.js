import './Register.css'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import SecondaryButton from '../../components/SecondaryButton'

const Register = () =>{
    return (
            <div className="container-register">
                <img src="/images/keener.fy-big.svg" alt="Principal"/>
                <form>
                    <div className="sub-container">
                    <TextField label="NAME" placeholder="Paulo Gustavo"/>
                    <TextField label="LASTNAME" placeholder="Carvalho Tuler"/>

                    </div>
                    <div className="sub-container">
                    <TextField label="CPF" placeholder="ex: 000.111.222-33"/>
                    <TextField label="EMAIL" placeholder="example@mail.com"/>

                    </div >
                    <div className="sub-container">

                    <TextField label="PASSWORD" placeholder="************"/>
                    <TextField label="REPEAT YOUR PASSWORD" placeholder="************"/>
                    </div>
                    <div id="sub-container-button">
                        <Button button="REGISTER"/>
                        <SecondaryButton button="ALREADY CREATED?"/>
                    </div>
                </form>
            </div>
    )
}

export default Register