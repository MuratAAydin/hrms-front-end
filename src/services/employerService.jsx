import axios from "axios"

export default class employersService {
	 getEmployees() {
			return axios.get('http://localhost:8080/api/employees/getall')
	 }
}