import { Link } from "react-router-dom";
import '../styles/footer.css'
import Logo from '../styles/licious-logo.svg'

function Footer() {
  return (
    <div className="footer">
      <div>
        <ul>
            <li>
                <img src={Logo} alt="" />
            </li>
          <li>
            <Link to="/aboutus" >About Licious</Link>
          </li>
          <li>
            <a href="">Terms Of Use</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">FAQFeedback</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
        </ul>
        <p>
          © Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep. Now you can buy meat online anytime at your convenience. Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish, Prawns, Crabs), Marinades & Cold Cuts. All our products are completely natural and healthy. Once you've experienced Licious, you'll never go back to the old way of buying meat and seafood.
        </p>
      </div>
      <div className="col-2">
        <div>
          <p>Connect with us</p><br />
          <a>Facebook</a><br /><br />
          <a>Twitter</a><br />
        </div>
        <div>
          <p>Licious App</p><br />
          <a>PlayStore App</a><br /><br />
          <a>AppStore App</a><br />
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
