import './footerlayout.css'
import Contact from './ui/contact'
import GitHub from './ui/github'
export default function Page(){
    return(
        <div className='footer-content'>
            <Contact />
            <GitHub />
        </div>
    )
}