<template>
  <view class="container">
        
    <text class="titulo">Login</text>
    <text-input class="input" v-model="usuario.email" />
    <text-input class="input" v-model="usuario.senha" />

    <touchable-opacity :on-press="onPressRecuperarSenha">
      <text> 
        Esqueceu a senha? 
      </text> 
    </touchable-opacity>

    <button 
      class="button" 
      title="Login" 
      :on-press="onPressLogin"
    />

    <button 
      class="button" 
      title="Cadastro" 
      :on-press="onPressCadastro"
    />
   
  </view>
</template>

<script>

import LoginService from "../services/Login.Service"

export default { 
  data()  {
    return{
      usuario: {
        email: "userdemo@demo.com.br",
        senha: "minhasenha"
      }
    };
  },
    props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    async onPressLogin() {
      this.response = await LoginService.postLogin(this.usuario);
      this.navigation.navigate("Painel");
    },
    onPressRecuperarSenha() {
      this.navigation.navigate("RecuperarSenha");
    },
    onPressCadastro() {
      this.navigation.navigate("Cadastro");
    } 
  },
};
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.titulo {
  justify-content: flex-start;
  font-size: 30px;
  text-align: center;
}
.input {
  width:80%;
  padding:10px;
  border-radius:50px;
  margin-bottom: 30px;
  border-width: 1;
}

</style>
