import axios from 'axios';

const KEY = 'AIzaSyBGniAu_W43FBN9XXashzZQbeJI6gA4wPs'; 


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5,  
        key: KEY
    }
});