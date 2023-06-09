import { FaFacebookF,FaLinkedinIn,FaSkype,} from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import "./index.css"
const Footer=()=>(
    <div className="foot-note">
    <div className="Footer-container">
            <ul className="AOOC-footer">
                <li className="footer-head-style">About us</li>
                <li className="footer-style">
                Whether for a one-time project or ongoing 
                strategic advice and guidance, We provide best IT Services. 
                At Technolute, our mission is solely focused 
                on helping our clients leverage their technology 
                investments to improve business performance.</li>
            </ul>
            <ul className="AOOC-footer">
                <li className="footer-head-style">Our Services</li>
                <li className="footer-style">IT Consulting</li>
                <li className="footer-style">Application Development</li>
                <li className="footer-style">Enterprise Quality Assurance</li>
                <li className="footer-style">Content Management</li>
                <li className="footer-style">Mobile Apps Development</li>
            </ul>
            <ul className="AOOC-footer">
                <li className="footer-head-style">Our Services</li>
                <li className="footer-style">Web Portal Development & Solutions</li>
                <li className="footer-style">Business Coaching Services</li>
                <li className="footer-style">Integration Services</li>
                <li className="footer-style">Staff Augmentation</li>
            </ul>
            <ul className="AOOC-footer">
                <li className="footer-head-style">Contact us</li>
                <li className="footer-style">571-286-9107</li>
                <li className="footer-style">www.asoftsol.com</li>
                <li className="footer-style">3718 Block Drive, Irving, Texas, APT 1210</li>
                <li className="footer-style">Follow Us</li>
                <p className="footer-style"> 
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF className="footer-FLS-style"/></a>
                <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn className="footer-FLS-style"/></a>
                <a href="https://www.skype.com/en/" target="_blank" rel="noreferrer"><FaSkype className="footer-FLS-style"/></a>
                     </p>
            </ul>
    </div>
    <hr className="horozontal-line"/>
    <div className="copy-right-section">
        <p className="copy-logo-style"><MdOutlineCopyright className="Copy-icon-style"/>2023 Asoftsol.All Rights Reserved</p>
        </div>
    </div>
)
export default Footer;