
/*  A tela de LOGIN deverá conter:

- Email
- Senha
- Um link para "Esqueci Minha Senha"
- Botão de Login */

<template>
  <view class="container">
    
    <text class="titulo">Login</text>
    <text-input class="input" v-model="nome" />
    <text-input class="input" v-model="senha" />

    <touchable-opacity :on-press="onPressRecuperarSenha">
      <text> 
        Esqueceu a senha? 
      </text> 
    </touchable-opacity>

    <button 
      class="button" 
      v-bind:title="message" 
      v-bind:on-press="onPressLogin"
    />
   
  </view>
</template>

<script>
export default { 
  data: function()  {
    return{
      message: "Login",
      nome: "Usuario ou Email",
      senha: "Senha"
    };
  },
    props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    onPressLogin: function() {
      //alert('Acesso negado.');
      this.navigation.navigate("Cadastro");
    },
    onPressRecuperarSenha: function() {
      alert('Informe o email cadastrado.')
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
  background-color: white;
  height: 40; 
  width: 300;
  margin-top: 5px; 
  borderWidth: 0.9;
}

</style>
