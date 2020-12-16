<template>
    <view @submit.prevent="salvar" class="container">
         
         <text class="titulo">Cadastrar usuario</text>
         <text-input class="input" v-model="usuario.nome" />
         <text-input class="input" v-model="usuario.email" />
         <text-input class="input" v-model="usuario.senha" />
         <text-input class="input" v-model="usuario.celular" />
         
        <button
            class="btnCadastrar"
            :on-press="onPressCadastrar"
            title="Cadastrar"
        />
        <button
            class="btnLogin"
            :on-press="onPressLogin"
            title="Login"
        />

    </view>
</template>

<script>

import CadastroService from "../services/Cadastro.Service"

export default {
  data() {
    return{
      usuario: {
        nome: "Rony",
        email: "userdemo@demo.com.br",
        senha: "minhasenha",
        celular: "8298807555"
      }
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    async onPressCadastrar() {
      //this.navigation.navigate("MeusDados");
      this.response = await CadastroService.postUsuario(this.usuario);
      //alert(this.usuario.nome)
    },
    onPressLogin() {
      this.navigation.navigate("Login");
    }  
  }
}
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