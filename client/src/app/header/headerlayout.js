import './headerlayout.css'
import LoginButton from './ui/loginbutton'
import RegisterButton from './ui/registerbutton'
import Logo from './ui/logo'

export default function Page(){
    return(
        <div className='navbar'>
            <div className='left-items'>
                <Logo />
            </div>
            <div className='right-items'>
                <RegisterButton />
                <LoginButton />
            </div>
        </div>
    )
}