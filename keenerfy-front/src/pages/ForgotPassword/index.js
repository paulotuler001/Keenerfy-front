import './ForgotPassword.css'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import SecondaryButton from '../../components/SecondaryButton'

const ForgotPassword = () =>{
    return (
        <div className="container-login">
                <img src="/images/keener.fy-big.svg" alt="Principal"/>
                <form>
                    <TextField label="EMAIL" placeholder="email@example.com"/>
                    <TextField label="NEW PASSWORD" placeholder="************"/>
                    <br/>
                    <br/>
                    <br/>
                    <Button button="ENTER"/>
                    <SecondaryButton button="Back to Login"/>
                </form>
        </div>
    )
}

export default ForgotPassword