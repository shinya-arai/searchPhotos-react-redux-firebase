import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID 4c00ffd6ecea2c43ab2b7bce5d2bbb55f913e23019730ec83ab6f8179b546ad7"
  }
});