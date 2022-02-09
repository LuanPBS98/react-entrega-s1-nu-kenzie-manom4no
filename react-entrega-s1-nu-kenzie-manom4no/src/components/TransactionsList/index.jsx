import { useState } from "react";
import Buttom from "../Buttom";
import "../TransactionsList/styles.css"

const TransactionList = ({ ListTransactions,setListTransactions,filtro,setFiltro }) => {
    const delTransaction = (prop) => {
        setListTransactions(ListTransactions.filter((item) => item.id !== prop)) ;
    }
    const listaVazia = () => {
        return (
        <div className="vazio">
            <h2>Você não possui nenhum lançamento</h2>
            <div className="retangle">
            </div>
            <div className="retangle">
            </div>
            <div className="retangle">
            </div>
        </div>
        )
    }
    const listaCheia = () => {
        return(
            <ul>
                {ListTransactions.filter(({tipo_de_transação}) =>(filtro === "todos")?tipo_de_transação !== filtro : tipo_de_transação === filtro).map((item,index) => (
                    <li key={index} className={item.tipo_de_transação}>
                        <div className="ar1">
                            <h3>{item.descricao}</h3>
                            <h4>{item.tipo_de_transação}</h4>
                        </div>
                        <div className="ar2">
                            <p>{Number(item.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                            <Buttom classe="btn-delete" onClick={() => delTransaction(item.id)}></Buttom>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
    return (
        <aside className="list--geral">
            <nav>
                <h2>Resumo Financeiro</h2>
                <div className="list--btn--filter">
                    <Buttom classe="btn--filter btn--filter--todos" onClick={()=>setFiltro("todos")}>Todos</Buttom>
                    <Buttom classe="btn--filter btn--filter--entradas"onClick={()=>setFiltro("entrada")}>Entradas</Buttom>
                    <Buttom classe="btn--filter btn--filter--despesas"onClick={()=>setFiltro("Saida")}>Despesas</Buttom>
                </div>
            </nav>
            {ListTransactions.length !== 0?listaCheia():listaVazia()}
        </aside>
    )
}

export default TransactionList