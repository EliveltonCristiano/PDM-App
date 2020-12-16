import axios from "axios";

export default class CadastroService {
    static async postUsuario(usuario) {

        axios.post('https://us-central1-uncisal.cloudfunctions.net/users-create', {
            usuario: {
                nome: usuario.nome,
                celular: usuario.celular,
                email: usuario.email,
                senha: usuario.senha,
            }
        })
        .then(function (response) {
            console.log(response);
             usuario.nome = "";
             usuario.celular = "";
             usuario.email = "";
             usuario.senha = "";
            alert("Usuario cadastrado com sucesso.");
        })
        .catch(function (error) {
            console.log(error);
            alert("Erro. Todos os campos devem ser preenchidos");
        });
    }
}