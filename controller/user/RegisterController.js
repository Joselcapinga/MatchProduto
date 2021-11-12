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
    validaInputs()
    {

        if( name === null && this.email === null && this.senha === null && this.confSenha === null){
            this.ErroName = "Preencha o campo nome";
            this.ErroEmail = "Preencha o campo email";
            this.ErroSenha = "Preencha o campo senha";
            this.ErroConfirmeSenha = "Preencha o campo confirmação da senha";
            this.flag = false
            return;
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
            this.flag = true;
            alert('Registrado com sucesso!'); 
            return;
        }
        else if(!(this.senha === this.confSenha)){

            this.ErroSenhaDiferente = "Senhas diferentes";

        }
        else if(this.flag == false) return;
   }
}