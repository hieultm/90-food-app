import React from 'react';
import PropTypes from 'prop-types';

function SignupField(props) {
    const { icon, name, placeholder } = props;
    return (
        <div className="mb-[15px]">
            <div className="flex items-center rounded-[5px] mt-2 bg-input-signup">
                {icon}
                <input
                    className="border-none outline-none flex-1 py-3 bg-transparent placeholder:text-white text-white pl-4"
                    type={name}
                    id={name}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        </div>
    );
}

SignupField.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.object,
    placeholder: PropTypes.string,
};

export default SignupField;
