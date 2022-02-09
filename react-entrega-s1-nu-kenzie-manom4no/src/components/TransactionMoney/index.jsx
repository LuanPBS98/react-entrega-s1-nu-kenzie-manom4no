import "./styles.css"

const TransactionMoney = ({ ListTransactions,filtro }) => {
    return (
        <div className="boxMoney">
            <div className="moneyBox">
                <div className="a1">
                    <h3>Valor total</h3>
                    <h4>O valor se refere as entradas e saidas</h4>
                </div>
                <h3 className="price">{
                    ListTransactions.filter(({tipo_de_transação}) =>(filtro === "todos")?tipo_de_transação !== filtro : tipo_de_transação === filtro).reduce((acc,cur) => {
                        return (cur.tipo_de_transação === "Saida" && filtro === "todos")?acc + Number(cur.valor):acc + Number(cur.valor);
                    },0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                }</h3>
            </div>
        </div>
    )
}

export default TransactionMoney