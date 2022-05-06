import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-2edb2.cloudfunctions.net/api'
    // THE API (CLOUD FUNCTION) URL

});

export default instance;


//local base url :
// http://localhost:5001/clone-2edb2/us-central1/api