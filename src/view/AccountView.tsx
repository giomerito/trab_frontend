import * as React from 'react'
import { observer } from "mobx-react";
import { ModelAccount } from '../model/ModelAccount';

export interface AccountViewProps {
    model: ModelAccount;
}

@observer
export class AccountView extends React.Component<AccountViewProps> {

    readonly setDescricao = (e: React.FormEvent<HTMLInputElement>) => {
        const valor = e.currentTarget.value;
        console.log("CHANGING", valor);
        this.props.model.setDescricao(valor);
    };

    readonly onSubmit = () => {

    };

    render() {
        const { model } = this.props;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="container" >
                    <h3>Adicionar Conta</h3>
                    <div>
                        <label htmlFor="">Descrição <br />
                            <input type="text" id="desc" value={model.descricao} onChange={this.setDescricao} />
                        </label>

                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        );
    }

} 