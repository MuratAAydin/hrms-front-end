import axios from "axios"

export default class educationsService {
	 getEducations() {
			return axios.get('http://localhost:8080/api/educations/getall')
	 }
}