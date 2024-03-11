import './_createPassword.scss'
import MyInputPassword from "../MyInputPassword";
import {useState} from "react";
import {isPasswordValid} from "../../lib/validations";
import {resetPassword, userLogin} from "../../lib/actions";
import ErrorsList from "../errorsList/ErrorsList";

const initialInputFields = {
    password:'',
    confPassword:''
};

const CreatePassword = () => {
    const [inputFields, setInputFields] = useState(initialInputFields);
    const handleInputChange = (e) => {
        setInputFields(prev => ({...prev, [e.target.dataset.userInfo]: e.target.value}))
    }

    const isDisabled = !isPasswordValid(inputFields.password)
        || !isPasswordValid(inputFields.confPassword)
        || !(inputFields.password === inputFields.confPassword);

    const [formErrors, setFormErrors] = useState([]);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setFormErrors([]);

        resetPassword(inputFields.password).then( resp => {
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
        <div className={'create-password-block'}>
            <h1 className={'title'}>Create new Password?</h1>

            <form onSubmit={handleSubmitForm} className={'form'}>

                <MyInputPassword label={'Password'}
                                 userInfo={'password'}
                                 value={inputFields.password}
                                 onChange={handleInputChange} />

                <MyInputPassword label={'Confirm Password'}
                                 userInfo={'confPassword'}
                                 value={inputFields.confPassword}
                                 onChange={handleInputChange} />

                <button className={'button primary'} disabled={isDisabled}>Reset Password</button>
            </form>

            { formErrors.length > 0 && <ErrorsList formErrors={formErrors}/> }
        </div>
    );
};

export default CreatePassword;