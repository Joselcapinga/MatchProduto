export default class UserController {

    email = String;
    senha = String;
    ErroEmail = String;
    ErroSenha = String;

    constructor(email, senha)
    {
        this.email = null;
        this.senha = null;
    }

    validaInputs(email, senha){

        this.email = email;
        this.senha = senha;

        if( this.email === null && this.senha === null){
            this.ErroEmail = "Preencha o campo email";
            this.ErroSenha = "Preencha o campo senha";
            return
        }
        //else {this.loginValidate(); return}
        
        if(this.email === null)
            this.ErroEmail = "Preencha o campo email";
        if(this.senha === null)
            this.ErroSenha = "Preencha o campo senha";
   }

   getEmail(){return this.email;}


   loginValidate()
   {
      /*const auth = getAuth();
      signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        return
      });*/

      if(this.email === "joselc@gmail.com" && this.senha === "123456")
      {
        return 1;
      }
      else return 0;

      //alert("login realizado com sucesso");
   }

}