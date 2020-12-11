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

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    Cadastro: Cadastro,
    MeusDados: MeusDados,
  },
  {
    initialRouteName: 'Login',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator }, 
}
</script>

<style>

</style>
