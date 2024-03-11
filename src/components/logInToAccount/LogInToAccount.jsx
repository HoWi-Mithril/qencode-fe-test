import './_logInToAccount.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
import Divider from "../divider/Divider";
import SocialLinks from "./socialLinks/SocialLinks";
import MyInputPassword from "../MyInputPassword";
import {userLogin} from "../../lib/actions";
import {isEmailValid, isPasswordValid} from "../../lib/validations";
import ErrorsList from "../errorsList/ErrorsList";

const initialInputFields = {
    email:'',
    password:''
};

const LogInToAccount = () => {
    const [inputFields, setInputFields] = useState(initialInputFields);
    const handleInputChange = (e) => {
        setInputFields(prev => ({...prev, [e.target.dataset.userInfo]: e.target.value}))
    }

    const [formErrors, setFormErrors] = useState([]);

    const isVisible = isEmailValid(inputFields.email);
    const isDisabled = !isVisible || !isPasswordValid(inputFields.password);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setFormErrors([]);

        userLogin({...inputFields}).then( resp => {
            if (resp?.error > 0) {
                if (!Array.isArray(resp.detail)) {
                    setFormErrors([{'field_name':'User', 'error': resp.detail}])
                } else {
                    setFormErrors(resp.detail);
                }
            } else {
                console.log('Success');
                setInputFields(initialInputFields);
            }
        })
    }

    return (
        <div className={'login-block'}>
            <h1 className={'title'}>Log in to your account</h1>
            <SocialLinks />
            <Divider />

            <form onSubmit={handleSubmitForm} className={'form'}>
                <input type="email"
                       value={inputFields.email}
                       data-user-info={'email'}
                       onChange={handleInputChange}
                       placeholder={'Work email'} />

                {
                    isVisible && (
                        <div className={'show-password'}>
                            <MyInputPassword userInfo={'password'}
                                             value={inputFields.password}
                                             onChange={handleInputChange} />

                            <div className={'forgot-password'}>
                                <Link to={'/forgot-password'}>Forgot your password?</Link>
                            </div>
                        </div>
                    )
                }

                <button className={'button primary'}
                        disabled={isDisabled}
                        type={'submit'}>Log in to Qencode</button>
            </form>

            <div className={'sign-up'}>
                <p>Is your company new to Qencode? <a href="/" className={'sign-up-link'}>Sign up</a></p>
            </div>

            { formErrors.length > 0 && <ErrorsList formErrors={formErrors}/> }
        </div>
    );
};

export default LogInToAccount;