import './_socialLinks.scss';
import iconGoogle from '../../../assets/icon-google.svg'
import iconGithub from '../../../assets/icon-github.svg'
import {Link} from "react-router-dom";

const linkList = [
    {
        id: 1,
        label: 'Google',
        icon: iconGoogle
    },
    {
        id: 2,
        label: 'Github',
        icon: iconGithub
    }
]


const SocialLinks = () => {
    return (
        <ul className={'social-links'}>
            {
                linkList.map( link => (
                    <li key={link.id}>
                        <Link className={'link'} to={'/'}>
                            <img src={link.icon} alt={link.label}/>
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default SocialLinks;