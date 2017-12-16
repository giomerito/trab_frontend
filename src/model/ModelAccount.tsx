import { observable, action } from 'mobx';

export class ModelAccount {

    @observable
    descricao: string = "";

    @action
    setDescricao(descricao: string) {
        this.descricao = descricao;
    }
    
}
