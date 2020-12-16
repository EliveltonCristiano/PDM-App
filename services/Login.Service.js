import axios from "axios";

export default class LoginService {
    static async postLogin(usuario) {

        axios.post('https://us-central1-uncisal.cloudfunctions.net/users-login', {
            usuario: {
                email: usuario.email,
                senha: usuario.senha,
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
            alert("Erro. Todos os campos devem ser preenchidos");
        });
    }
}