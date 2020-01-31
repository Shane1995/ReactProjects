import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5c54d6bb64f3bc2e5af869f3d0146dd69a1f3f33032943591addc65e0ee601a6'
      }
}); 