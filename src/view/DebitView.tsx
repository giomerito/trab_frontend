import * as React from 'react'
import { observer } from 'mobx-react';
import { DebitModel } from '../model/ModelDebit';

export interface DebitViewProps{
    debit: DebitModel;
}

@observer
export class DebitView extends React.Component<DebitViewProps>{

  readonly setDescricao = (e: React.FormEvent<HTMLInputElement>) => {
      const valor = e.currentTarget.value;
      this.props.debit.setDescricao(valor);
  }  

  readonly setValor = (e: React.FormEvent<HTMLInputElement>) => {
      const valor = e.currentTarget.value;
      this.props.debit.setValor(valor);
  }

  readonly setData = (e: React.FormEvent<HTMLInputElement>) => {
      const data = e.currentTarget.value;
      this.props.debit.setData(data);
  }

  readonly onSubmit = () => {

  };
  
  render() {

      const { debit } = this.props;

      return (
          <form onSubmit={this.onSubmit}>
            <div>
                <h3>Adicionar Debito</h3>
                <div>
                    <label>Descrição </label>                    
                    <input type="text" value={debit.descricao} onChange={this.setDescricao} />                    
                    <label>Data</label>
                    <input type="text" value={debit.data} onChange={this.setData} />
                    <label>Valor</label>
                    <input type="text" value={debit.valor} onChange={this.setValor} />
                    <br/>
                    <input type="submit" value="Save" />
                </div>
            </div>
          </form>
      );
  }
}    