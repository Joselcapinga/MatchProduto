import axios from 'axios';
import api from '../../config/Axios.js';



export default class RegisterController {

    //var
    name = String;
    email = String;
    senha = String;
    confSenha = String;
    flag = Boolean;

    //mensagem erros
    ErroName = String;
    ErroEmail = String;
    ErroSenha = String;
    ErroConfirmeSenha = String;
    ErroSenhaDiferente = String;
    

    constructor(name, email, senha, confSenha)
    {
        this.name = name;
        this.email = email;
        this.senha = senha;
        this.confSenha = confSenha;
        this.flag = true;

        this.ErroName = null;
        this.ErroEmail = null;
        this.ErroSenha = null;
        this.ErroConfirmeSenha = null;
        this.ErroSenhaDiferente = null;
    }

    //validando os imputs
    AddRegister()
    {
        if( name === null && this.email === null && this.senha === null && this.confSenha === null){
            this.ErroName = "Preencha o campo nome";
            this.ErroEmail = "Preencha o campo email";
            this.ErroSenha = "Preencha o campo senha";
            this.ErroConfirmeSenha = "Preencha o campo confirmação da senha";
            this.flag = false
            return 0;
        }
        if(this.name === null ){
           this.ErroName = "Preencha o campo nome";
           this.flag = false;
        }
        if(this.email === null){
            this.ErroEmail = "Preencha o campo email";
            this.flag = false;
        }
        if(this.senha === null){
            this.ErroSenha = "Preencha o campo senha";
            this.flag = false;
        }
        if(this.confSenha === null ){
           this.ErroConfirmeSenha = "Preencha o campo comfirme senha";
           this.flag = false;
        }
        //validando se as senhas são iguais
        if(this.flag === true && this.senha === this.confSenha)
        {
            this.add();
            //alert('Registrado com sucesso!'); 
            return 1;
        }
        else if(!(this.senha === this.confSenha)){
            this.ErroSenhaDiferente = "Senhas diferentes";
        }
        return 0;
   }
   //novo usuário
   add()
   {
    api.post("add", {'name':this.name,'email': this.email,'senha':this.senha}).then(res => {
        const user = res.data;
        console.log(user);
      });
   }

   

   
}