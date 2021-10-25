export default class RegisterController {

    name = String;
    email = String;
    senha = String;
    ErroEmail = String;
    ErroSenha = String;
    f = Boolean;

    constructor(){
        this.name = null;
        this.email = null;
        this.senha = null;
        this.ErroEmail = null;
        this.ErroSenha = null;
        this.ErroConfirmeSenha = null;
        this.ErroName = null;
        this.f = false;
    }

    validaInputs(name, email, senha){
        this.name = name;
        this.email = email;
        this.senha = senha;

        if( this.email === null && this.senha === null && name === null){
            this.ErroName = "Preencha o campo nome";
            this.ErroEmail = "Preencha o campo email";
            this.ErroSenha = "Preencha o campo senha";
            this.ErroName  = "Preencha o campo senha";
            this.ErroConfirmeSenha = "Preencha o campo confirmação de senha".
            return
        }
        //else {this.loginValidate(); return}
        
        if(this.email === null)
            this.ErroEmail = "Preencha o campo email";
        if(this.senha === null)
            this.ErroSenha = "Preencha o campo senha";
        if(this.ErroName === null )
           this.ErroSenha = "Preencha o campo nome";
   }

}