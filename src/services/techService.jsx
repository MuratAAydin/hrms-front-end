import axios from "axios"

export default class techService {
	 getTechs() {
			return axios.get('http://localhost:8080/api/techs/getall')
	 }
}