import axios from "axios";

export default class DadosUsuarioService {
  static async getDados() {
  const { data } = await axios.get("https://us-central1-uncisal.cloudfunctions.net/users-get?id=545");
        // console.log(data);
        return data;
  }
}
