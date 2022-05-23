import PropTypes from 'prop-types';
function LoginField(props) {
    const { label, icon, name, placeholder } = props;
    return (
        <div className="mb-[15px]">
            <label htmlFor={label} className="text-sm">
                {label}
            </label>
            <div className="flex items-center rounded-[5px] mt-2 bg-zinc-100">
                {icon}
                <input
                    className="border-none outline-none flex-1 py-3 bg-transparent placeholder:text-zinc-400"
                    type={name}
                    id={label}
                    placeholder={placeholder}
                    name={name}
                />
            </div>
        </div>
    );
}

LoginField.propsTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.object,
    placeholder: PropTypes.string,
};

export default LoginField;
