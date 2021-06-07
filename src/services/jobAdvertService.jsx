import axios from "axios"

export default class jobAdvertService {
	 getjobAdverts() {
			return axios.get('http://localhost:8080/api/jobAdverts/getall')
	 }
}