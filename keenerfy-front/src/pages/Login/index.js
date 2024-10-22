import './Login.css'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import SecondaryButton from '../../components/SecondaryButton'

const Login = () =>{
    return (
        <div className="container-login">
                <img src="/images/keener.fy-big.svg" alt="Principal"/>
                <form>
                    <TextField label="LOGIN" placeholder="email@example.com"/>
                    <TextField label="PASSWORD" placeholder="************"/>
                    <h3>Forgot your password?</h3>
                    <Button button="ENTER"/>
                    <SecondaryButton button="REGISTER"/>
                </form>
        </div>
    )
}

export default Login