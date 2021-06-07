import axios from "axios"

export default class jobServices {
	 getjobs() {
			return axios.get('http://localhost:8080/api/jobs/getall')
	 }
}