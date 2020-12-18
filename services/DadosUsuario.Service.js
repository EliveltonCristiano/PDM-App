import axios from "axios";

export default class DadosUsuarioService {
  static async getDados() {
    const { data } = await axios.get("https://us-central1-uncisal.cloudfunctions.net/users-get?id=545")
    .then(function (response) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
