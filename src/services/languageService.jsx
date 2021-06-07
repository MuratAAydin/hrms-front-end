import axios from "axios"

export default class languageService {
	 getjobAdverts() {
			return axios.get('http://localhost:8080/api/languages/getall')
	 }
}