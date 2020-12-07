
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

    <!-- <button
      class="button"
      :on-press="onPressRecuperarSenha"
      title="Esqueceu a senha?"
      color="#841584"
    /> -->
   
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
  methods: {
    onPressLogin: function() {
      alert('Acesso negado.');
    },
    onPressRecuperarSenha: function() {
      alert('Informe o email cadastrado.')
    } 
  },
};
</script>

<style>
.container {
  flex: 1;
  background-color:lightblue;
  align-items: center;
  justify-content: center;
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
