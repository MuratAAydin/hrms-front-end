import axios from "axios"

export default class techService {
	 getechs() {
			return axios.get('http://localhost:8080/api/languages/getall')
	 }
}