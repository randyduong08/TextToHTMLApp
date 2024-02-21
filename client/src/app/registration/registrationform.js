import './registrationform.css';

export default function RegistrationForm(){
    return(
        <div className="container">
            <h2 className="flex items-center justify-center">Register for TextToHTML</h2>
            <button className="button google">Register using Google</button>
            <button className="button microsoft">Register using Microsoft</button>
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
    );
}