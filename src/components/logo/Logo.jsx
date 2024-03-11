import logo from '../../assets/logo-title.svg'
import './_logo.scss'
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to={'/'}>
                <img src={logo} alt="logo-quencode" className={'logo'}/>
            </Link>
        </div>
    );
};

export default Logo;