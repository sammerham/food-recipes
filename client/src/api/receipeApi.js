import axios from "axios";

const URL = 'http://localhost:3001/recipes';
/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 */

class ReceipeApi {

  static async fetchReceipes(term) {
    const res = await axios.get(`${URL}/${term}`);
    return res.data.hits;
  };
}

export default ReceipeApi;