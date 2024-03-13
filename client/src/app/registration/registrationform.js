import './registrationform.css';
import Header from '../header/headerlayout';

export default function RegistrationForm() {
    return (
        <div className="container">
            <Header />
            <h2 className="flex items-center justify-center font-bold" style={{textAlign: 'center'}}>Register</h2> {/* Added inline style for text alignment */}
            <form>
                <input type="email" placeholder="Email" className="email" />
                <input type="name" placeholder="Name" className="name" />
                <input type="password" placeholder="Password" className="password" />
                <button type="submit" className="button email flex items-center justify-center p-2 mt-5">
    <span className="inline-block mr-2">Register using your email</span>

</button>
<button className="button google flex items-center justify-center p-2 mt-5">
    <img src="Google Login Icon.png" alt="Google Login Icon" width="5%" height="5%" />
    <span className="inline-block ml-2">Register with Google</span>
</button>
<button className="button microsoft flex items-center justify-center p-2 mt-5">
    <img src="Windows Login Icon.png" alt="Windows Login Icon" width="5%" height="5%" />
    <span className="inline-block ml-2">Register with Microsoft</span>
</button>


  </form>
  <div className="register">
    <p>Already have an account? <a href="/registration" className="font-bold underline">Login!</a></p>
</div>

        </div>
    );
}
