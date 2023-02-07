import axios from "axios";

const StarService = axios.create({
    baseURL: "https://swapi.py4e.com/api/people",
})

const searhStar = async (name) => {

    try { const response = await StarService.get(`?search=${name}`); return response.data.results }
    catch (err) {
    }
}

export default searhStar;