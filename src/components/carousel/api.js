import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '38403877-64d14ccf654d22b76dab55b11';

export const serviceImages = async () => {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 50,
  });

  const { data } = await axios.get(`?${params}`);
  console.log(data);
  return data;
};
