import axios from "axios";

const instance = axios.create({
	baseURL: "https://tinder-backend30.herokuapp.com/",
});

export default instance;
