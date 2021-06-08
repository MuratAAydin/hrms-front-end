import axios from "axios"

export default class userService {
	 getUsers() {
			return axios.get('http://localhost:8080/api/users/getall')
	 }
}