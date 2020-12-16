<template>
    <view class="container">

         <text class="titulo">Meus Dados</text>
         <text-input class="input" v-model="usuario.nome" />
         <text-input class="input" v-model="usuario.email" />
         <text-input class="input" v-model="usuario.senha" />
         <text-input class="input" v-model="usuario.celular" />
         <text-input class="input" v-model="usuario.sexo" />
         <text-input class="input" v-model="usuario.idade" />
         
        <button
            class="button"
            :on-press="onPressAtualizar"
            title="Atualizar"
        />

    </view>
</template>

<script>
import DadosUsuarioService from '../services/DadosUsuario.Service';
export default {
  data()  {
    return {
      usuario: {
        nome: null,
        email: null,
        senha: null,
        celular: null,
        sexo: null,
        idade: null,
      }
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
   methods: {
      async onPressMeusDados() {
      console.log("______________________");
      this.response = await DadosUsuarioService.get(this.data.nome);
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