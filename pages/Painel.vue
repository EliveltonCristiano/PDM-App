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
export default {
  props: {
      navigation: { 
      type: Object 
    },
  },
    methods: {
        onPressMeusDados() {
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
