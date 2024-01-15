import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '39179873-201b3855a448d3e276072cdb7';

export const serviceImages = async () => {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 50,
  });

  const { data } = await axios.get(`?${params}`);
  return data;
};
