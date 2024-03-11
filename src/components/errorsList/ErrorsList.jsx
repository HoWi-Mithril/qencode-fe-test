import './_errorsList.scss'

const ErrorsList = ({formErrors}) => {
    return (
        <div className={'error-list'}>
            <ul>
                {
                    formErrors.map(
                        ({field_name, error}) => <li key={field_name}>{field_name} : {error}</li>
                    )
                }
            </ul>
        </div>
    );
};

export default ErrorsList;