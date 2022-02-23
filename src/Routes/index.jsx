import { useState } from "react";
import { Switch,Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import UserDashBoard from "../Pages/UserDashboard";

const Rotas = () => {
    const [ dataBase,setDataBase ] = useState([]);
    const [ transactions,setTransactions ] = useState([]);
    const [ userId,setUserId ] = useState((dataBase.length));
    const [ itemId,setItemId ] = useState(0);
    const [ filterBase,setFilterBase ] = useState("Todos");
    return (
        <>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage/>
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage
                        dataBase={dataBase}
                        setDataBase={setDataBase}/>
                </Route>
                <Route exact path={"/signup"}>
                    <SignUpPage
                        dataBase={dataBase}
                        setDataBase={setDataBase}
                        finalId={userId}
                        setFinalId={setUserId}/>
                </Route>
                <Route exact path={"/user/:id"}>
                    <UserDashBoard 
                        dataBase={dataBase} 
                        setDataBase={setDataBase} 
                        transactions={transactions} 
                        setTransactions={setTransactions} 
                        itemId={itemId} 
                        setItemId={setItemId} 
                        filterBase={filterBase} 
                        setFilterBase={setFilterBase}/>
                </Route>
            </Switch>
        </>
    )
}

export default Rotas;