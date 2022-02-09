import transactionLogo from "../images/transactionLogo.png";
import Buttom from "../Buttom";
import "./styles.css"

const TransactionHeader = ({ onClick }) => {
    return (
        <header>
            <div className="headerLimit">
                <img className="transactionLogo" src={transactionLogo}/>
                <div>
                    <Buttom classe="btn-logout" onClick={ onClick }>Inicio</Buttom>
                </div>
            </div>
        </header>
    )
}

export default TransactionHeader;