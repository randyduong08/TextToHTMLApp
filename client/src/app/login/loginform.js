import './loginform.css';
import Header from '../header/headerlayout';
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginForm() {
    return (
        <div className="container">
            <Header />
            <h2 className="flex items-center justify-center" style={{textAlign: 'center'}}>Login</h2> {/* Added inline style for text alignment */}
            <form>
                <input type="email" placeholder="Email" className="email" />
                <input type="name" placeholder="Name" className="name" />
                <input type="password" placeholder="Password" className="password" />
                <button type="submit" className="button email">Login using your email</button>
            </form>
            <div className="flex justify-center">
                <button className="button google">
                    <img src="Google Login Icon.png" alt="Google Login Icon" width="5%" height="5%" />Login with Google
                </button>
            </div>
            <button className="button microsoft">
                <img src="Windows Login Icon.png" alt="Windows Login Icon" width="5%" height="5%" />Login with Microsoft
            </button>
            <div className="register">
                <p>Don't have an account? <a href="/registration">Register</a></p>
                <div className="mt-2"> {/* Add margin top from the checkbox */}
                    <Checkbox/> Accept Terms and Conditions
                </div>
            </div>
        </div>
    );
}
