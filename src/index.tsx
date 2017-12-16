import * as React from "react";
import * as ReactDOM from "react-dom";
import { observer } from "mobx-react";
import { ModelAccount } from './model/ModelAccount';
import { AccountView } from "./view/AccountView";
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { ModelDebit } from './model/ModelDebit';

@observer
class App extends React.Component {
    account: ModelAccount;
    debit: ModelDebit;

    componentWillMount(){
        this.account = new ModelAccount();
        this.debit = new ModelDebit();
    }

    render(){
        return (
            <div className="App">
                <HashRouter>
                    <Switch></Switch>
                </HashRouter>
            </div>
        );
    }
}

const ObserverApp = observer(App);

ReactDOM.render(    
    <ObserverApp />,   
    document.getElementById("app")      
);

