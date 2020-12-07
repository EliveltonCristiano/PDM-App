/* A tela de CADASTRO deverá conter ao menos:

- Nome
- Email
- Senha
- Celular
- Botão de cadastro */


<template>
    <view class="container">
         <text class="tittulo">Cadastrar usuario</text>

         <text-input class="input" v-model="Nome" />
         <text-input class="input" v-model="Email" />
         <text-input class="input" v-model="Senha" />
         <text-input class="input" v-model="Celular" />
         
        <button
            class="button"
            :on-press="onPressCadastrar"
            title="Cadastrar"
        />

    </view>
</template>

<script>
export default {
    
}
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