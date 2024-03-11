import './_forgotPassword.scss'
import {Link} from "react-router-dom";
import {useState} from "react";
import {forgotPasswordEmail} from "../../lib/actions";
import {isEmailValid} from "../../lib/validations";
import ErrorsList from "../errorsList/ErrorsList";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState('');
    const [formErrors, setFormErrors] = useState([]);

    const isDisabled = !isEmailValid(inputEmail);

    const handleSubmitForm = (e) => {
        e.preventDefault();

        forgotPasswordEmail(inputEmail).then(resp => {
            if (resp?.error > 0) {
                if (!Array.isArray(resp.detail)) {
                    setFormErrors([{'field_name':'Email', 'error': resp.detail}])
                } else {
                    setFormErrors(resp.detail);
                }
            } else {
                console.log('Success');
                navigate("/create-password");
            }
        })
    }


    return (
        <div className={'forgot-password-block'}>
            <h1 className={'title'}>Forgot Password?</h1>

            <form onSubmit={handleSubmitForm} className={'form'}>
                <input type="email"
                       value={inputEmail}
                       onChange={(e) => setInputEmail(e.target.value)}
                       placeholder={'Enter your email'} />

                <button type={'submit'} disabled={isDisabled} className={'button primary'}>Send</button>

                <button className={'button secondary'} >
                    <Link to={'/'}>Cancel</Link>
                </button>
            </form>

            { formErrors.length > 0 && <ErrorsList formErrors={formErrors}/> }
        </div>
    );
};

export default ForgotPassword;