const Buttom = ({ classe,onClick,children}) => {
    return (
        <>
            <button className={classe} onClick={onClick}>{ children }</button>
        </>
    )
}

export default Buttom;