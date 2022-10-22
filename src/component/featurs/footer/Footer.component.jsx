import './Footer.css'
import { BsGithub,BsLinkedin,BsFacebook } from "react-icons/bs";

export default function Footer(){
    return(
        <div className="footer">
            <BsGithub size="50px"/>
            <BsFacebook size="50px"/>
            <BsLinkedin size="50px"/>
        </div>
    )
}