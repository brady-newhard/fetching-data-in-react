const API_KEY = 'b1e54900f9be40e7b6624708251302';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchData(city); // Don't forget to pass city state!
    setCity('');
  };
  
const show = async (city) => {
    try {
      const queryString = `&q=${city}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      console.log('Data:', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

export { show };
