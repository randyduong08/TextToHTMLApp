import './registrationform.css';
import Header from '../header/headerlayout';

export default function RegistrationForm() {
    return (
        <div>
            <Header />
            <div className="registration-container">
                <h2 className="flex items-center justify-center">Register for TextToHTML</h2>
                <button className="button google">
                    <img src="Google Login Icon.png" alt="Google Login Icon" width="5%" height="5%" style={{ marginRight: '5px' }} />Register with Google
                </button>
                <button className="button microsoft">
                    <img src="Windows Login Icon.png" alt="Windows Login Icon" width="5%" height="5%"/>Register with Microsoft
                </button>
                <p className="flex items-center justify-center">or</p>
                <form>
                    <input type="email" placeholder="Email" className="email" />
                    <input type="password" placeholder="Password" className="password" />
                    <button type="submit" className="button email">Register using your email</button>
                </form>
                <p className="flex items-center justify-center">or</p>
                <button className="button sso">Log in with SSO</button>
                <div className="login">
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </div>
    );
}
