import './loginform.css';
import Header from '../header/headerlayout';
export default function LoginForm(){
    return(
        <div className="container">
             <Header />
            <h2 className="flex items-center justify-center">Login to TextToHTML</h2>
            <button className="button google">
                <img src="Google Login Icon.png" alt="Google Login Icon" width="5%" height="5%"/>Log in with Google
            </button>
            <button className="button microsoft">
                <img src="Windows Login Icon.png" alt="Windows Login Icon" width="5%" height="5%"/>Log in with Microsoft
            </button>
            <p className="flex items-center justify-center">or</p>
            <form>
                <input type="email" placeholder="Email" className="email" />
                <input type="password" placeholder="Password" className="password" />
                <button type="submit" className="button email">Log in your email</button>
            </form>
            <p className="flex items-center justify-center">or</p>
            <button className="button sso">Log in with SSO</button>
            <div className="register">
                <p>Don't have an account? <a href="/registration">Register</a></p>
            </div>
        </div>
    );
}
