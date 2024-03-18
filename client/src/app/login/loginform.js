import './loginform.css';
import GoogleButton from "./ui/googlebutton"
import CredentialLoginForm from './ui/credentialloginform';

export default function LoginForm(){
    return(
        <div className="container">
            <h2 className="flex items-center justify-center">Login to TextToHTML</h2>
            <GoogleButton/>
            <button className="button microsoft">
            <img src="Windows Login Icon.png" alt="Windows Login Icon" width="5%" height="5%"/>Log in with Microsoft
            </button>
            <p className="flex items-center justify-center">or</p>
            <CredentialLoginForm/>
            <p className="flex items-center justify-center">or</p>
            <button className="button sso">Log in with SSO</button>
            <div className="register">
                <p>Don't have an account? <a href="/registration">Register</a></p>
            </div>
        </div>
    );
}