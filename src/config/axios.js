import axios from 'axios'
import swal from './swal'

var axiosInstance = axios.create({
  baseURL: 'https://api.pokemontcg.io/v1/'
})

export default axiosInstance
export function errorHandler (err) {
  if (err.response) {
    swal(`Error ${err.response.data.status} : ${err.response.data.error}`, true)
  } else if (err.request) {
    swal(`Internal Server Error`, true)
    console.log(err.request)
  } else {
    console.log('Error', err.message)
  }
  console.log(err.config)
}
