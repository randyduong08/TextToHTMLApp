import './loginform.css';

export default function LoginForm(){
    return(
        <div className="container">
            <h2 className="flex items-center justify-center">Login to TextToHTML</h2>
            <button className="button google">Log in with Google</button>
            <button className="button microsoft">Log in Microsoft</button>
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