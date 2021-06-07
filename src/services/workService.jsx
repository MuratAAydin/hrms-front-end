import axios from "axios"

export default class WorkService {
	 getWorks() {
			return axios.get('http://localhost:8080/api/works/getall')
	 }
}