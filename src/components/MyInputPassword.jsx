import {useId, useState} from "react";


const MyInputPassword = ({label, userInfo, value, onChange}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const id = useId();

    return (<>
        {label && <label htmlFor={id}>{label}</label>}
        <div className={'password-wrapper'}>
            <input className={'password'}
                   type={isShowPassword ? 'text' : 'password'}
                   id={id}
                   onChange={onChange}
                   value={value}
                   data-user-info={userInfo}
                   placeholder={'Password'}
            />
            <button className={'password-switcher'}
                    type={'button'}
                    onClick={() => setIsShowPassword(prev => !prev)}></button>
        </div>
    </>);
};

export default MyInputPassword;