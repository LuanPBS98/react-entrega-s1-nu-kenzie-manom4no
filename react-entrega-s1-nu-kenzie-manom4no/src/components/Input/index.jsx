const Input = ({ type,classe,placeholder,value,onChange }) => {
    return (
        <>
            <input type={type} className={classe} placeholder={placeholder} value={value} onChange={onChange}
            >
            </input>
        </>
    )
}

export default Input;