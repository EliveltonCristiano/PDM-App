import axios from "axios";

axios.get('https://us-central1-uncisal.cloudfunctions.net/users-get?id=545')
.then(function (response) {
    console.log("_____");
    usuario.nome = response.data.usuario.nome;
})
.catch(function (error) {
  console.log(error);
});