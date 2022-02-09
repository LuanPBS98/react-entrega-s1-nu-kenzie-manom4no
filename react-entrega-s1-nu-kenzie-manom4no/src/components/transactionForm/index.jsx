import { useState } from "react";
import Buttom from "../Buttom";
import Input from "../Input";
import "../transactionForm/styles.css"

const TransactionForm = ({ ListTransactions,setListTransactions }) => {
    const [ id,setId ] = useState(1)
    const [ formInput,setFormInput ] = useState({descricao:"",valor:0,tipo_de_transação:"entrada"});
    
    const addTransaction = () => {
        setId(id+1);
        let objeto = {...formInput,id};
        objeto.valor = (objeto.tipo_de_transação === "Saida") ? Number(objeto.valor) * -1 : Number(objeto.valor);
        setListTransactions([...ListTransactions,objeto]);
    }

    return (
        <form className="form-geral" onSubmit={(event) => event.preventDefault()}>
            <h2 className="descricao">Descrição</h2>
            <Input type="text" maxlength="16" classe="transaction--description" value={ formInput.descricao } placeholder="Digite aqui sua descrição" onChange={((evt) => setFormInput ({...formInput,"descricao":evt.target.value}))}/>
            <div className="area1">
                <h2 className="outroValor">Valor</h2>
                <h2 className="outroValor">tipo de valor</h2>
            </div>
            <div className="area2">
                <Input type="number" 
                classe="transaction--money" 
                value={ formInput.valor }
                placeholder="R$" 
                onChange={((evt) => setFormInput ({...formInput,"valor":evt.target.value}))}/>          
                <select 
                name="type"
                className="transaction--select" 
                value={ formInput.tipo_de_transação } 
                onChange={((evt) => setFormInput ({...formInput,tipo_de_transação:evt.target.value}))}>
                    <option>Entrada</option>
                    <option>Saida</option>
                </select>
            </div>
            
            <Buttom classe="transaction--btn" onClick={addTransaction}>Inserir valor</Buttom>
        </form>
    )
}


export default TransactionForm;