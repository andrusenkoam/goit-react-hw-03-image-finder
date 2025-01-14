import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '29565253-2f5e819143320e39f486b959d';

export async function fetchImages(searchText, page, perPage) {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
  });

  const response = await axios.get(
    `${URL}?key=${KEY}&q=${searchText}&page=${page}&per_page=${perPage}&${params}`
  );
  // console.log(response);
  return response.data;
}
