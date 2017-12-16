import { observable, action } from 'mobx';

export class ModelDebit {

    @observable
    descricao: string = "";
    @observable
    valor: number = 0;
    @observable
    data: Date;

    @action
    setDescricao(value: string) {
        this.descricao = value;
    }
    @action
    setValor(value: number){
        this.valor = value;
    }
    @action
    setData(value: Date){
        this.data = value;
    }    
}