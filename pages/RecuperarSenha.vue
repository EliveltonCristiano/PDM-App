<template>
  <view class="container">
        
    <text class="titulo">Recuperar Senha</text>
    <text-input class="input" v-model="usuario.email" />

    <button 
      class="button" 
      title="Enviar email" 
      :on-press="onPressLogin"
    />
   
  </view>
</template>

<script>
export default { 
  data()  {
    return{
      usuario: {
        email: "Informe o email cadastrado.",
      }
    };
  },
    props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    onPressLogin() {
      alert('Email enviado.');
      //this.response = await LoginService.postLogin(this.usuario);
      //this.navigation.navigate("Cadastro");
    },
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
