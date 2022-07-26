import axios from "axios";


export default axios.create({
    baseURL: 'http://apinewbook.vtechedu.vn',
    headers: {
        Authorization: ' Bearer API_KEY'
    }
})