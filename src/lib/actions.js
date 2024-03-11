const USER_LOGIN_POST_API = 'https://auth-qa.qencode.com/v1/auth/login';
const PASS_RESET_API = 'https://auth-qa.qencode.com/v1/auth/password-reset';
const PASS_SET_API = 'https://auth-qa.qencode.com/v1/auth/password-set';


const postData = async (link, data) => {
    try {
        const response = await fetch(link,
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json",}
            });
        const responseData = await response.json();

        return responseData;
    } catch (err) {
        console.error('Request error: ', err);
    }
}


export const userLogin = async (loginData) => {
    return postData(USER_LOGIN_POST_API, loginData);
}

export const forgotPasswordEmail = async (email) => {
    return postData(PASS_RESET_API, {email});
}

export const resetPassword = async (password) => {
    return postData(PASS_SET_API, {password});
}