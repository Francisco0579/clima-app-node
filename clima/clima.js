const axios = require('axios');

const getClima = async (lat, lng) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d5ff5e19732707d236ff6b394fec2c9f&units=metric`);

	return resp.data.main.temp;
}

module.exports = {
	getClima
}