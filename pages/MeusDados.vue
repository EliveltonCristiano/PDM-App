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
    async mounted() {
    const { usuario } = await DadosUsuarioService.getDados();
    this.usuario = usuario;
},
  data() {
    return {
    usuario: {
      nome: null,
      email: null,
      celular: null,
      senha: null,
      idade: null,
      sexo: null,
    },
    }
  },
  props: {
      navigation: { 
        type: Object 
    },
  },
   methods: {
      onPressAtualizar() {
        //
    },
  },
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
