import React, { useState, useEffect } from 'react';
//import axios from "axios";
import api from '../../config/Axios';

export default class UserController {

    email = String;
    senha = String;
    ErroEmail = String;
    ErroSenha = String;
    users = []; 
    flag = Boolean;
    auth = String;


    constructor(email, senha)
    {
        this.email = null;
        this.senha = null;
        this.users = [];
        this.ErroEmail = null;
        this.ErroSenha = null;
        this.flag = true;
        //this.getUsers()
        //this.Authentication('ana@gmail.com', '123456');
    }

    validaInputs(users, email, senha)
    {
        //console.log(users)
        this.email = email;
        this.senha = senha;

        if( this.email === null && this.senha === null)
        {
            this.ErroEmail = "Preencha o campo email";
            this.ErroSenha = "Preencha o campo senha";
            console.log("todos vazios");
            return 0;
        }
        if(this.email === null){
          this.ErroEmail = "Preencha o campo email";
          this.flag = false;
        }
        if(this.senha === null){
          this.ErroSenha = "Preencha o campo senha";
          this.flag = false;
        }
        console.log("meio")
        if(this.flag == 1){
          console.log("entrou")
          for(let i in users){
            if( (email === users[i].email) &&  (senha === users[i].password ))
            {
              console.log(email);
              console.log(senha);
              return 1;
            }
          }
        }  
        return 0;
   }

   getUsers()
   {
     console.log(this.users);
   }

   /*Authentication(email, senha){

    for(let i in this.users){

      if( (email === this.users[i].email) &&  (senha === this.users[i].password ))
      {
        console.log(email);
        return 1;
        
      }

      //console.log(this.users[i].email)
    }
    return 0;

   }*/
}