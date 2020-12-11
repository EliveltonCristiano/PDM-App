/* A tela de MEUS DADOS deverá conter:

- Nome
- Email
- Senha
- Celular
- Sexo
- Idade
- Botão de atualizar */

<template>
    <view class="container">
         <text class="titulo">Meus Dados</text>

         <text-input class="input" v-model="Nome" />
         <text-input class="input" v-model="Email" />
         <text-input class="input" v-model="Senha" />
         <text-input class="input" v-model="Celular" />
         <text-input class="input" v-model="Sexo" />
         <text-input class="input" v-model="Idade" />
         
        <button
            class="button"
            :on-press="onPressAtualizar"
            title="Atualizar"
        />

    </view>
</template>

<script>
export default {
    
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
    background-color: white;
    height: 40; 
    width: 300;
    margin-top: 5px; 
    borderWidth: 0.9;
}
</style>