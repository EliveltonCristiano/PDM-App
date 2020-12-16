<template>
    <view class="container">

         <text class="titulo">Seja bem vindo</text>
         
        <button
            class="button"
            :on-press="onPressMeusDados"
            title="Meus Dados"
        />

    </view>
</template>

<script>
import DadosUsuarioService from '../services/DadosUsuario.Service';
export default {
    props: {
            navigation: {
            type: Object
        }
    },
      data() {
        return {
            usuario: {
                nome: null,
                email: null,
                senha: null,
                celular: null,
                sexo: null,
                idade: null,
            }
        }
    },
    methods: {
        onPressMeusDados() {
        console.log("______________________");
        this.navigation.navigate("MeusDados");
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