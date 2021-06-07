import axios from "axios"

export default class curriculumVitaeService {
	 getCurriculumVitaes() {
			return axios.get('http://localhost:8080/api/curriculumVitaes/getall')
	 }
}