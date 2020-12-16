<template>
  <app-navigator></app-navigator>
</template>

<script>

import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MeusDados from "./pages/MeusDados";
import RecuperarSenha from "./pages/RecuperarSenha"
import Painel from "./pages/Painel"

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    Cadastro: Cadastro,
    MeusDados: MeusDados,
    RecuperarSenha: RecuperarSenha,
    Painel: Painel,
  },
  {
    initialRouteName: 'Cadastro',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }, 
}
</script>

<style>

</style>
