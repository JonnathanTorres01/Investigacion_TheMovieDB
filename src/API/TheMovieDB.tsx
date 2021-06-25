import axios from 'axios';

const KEY = 'e5c79342ce4740963f9570aee9ffe6cb';

export default axios.create({
baseURL:'https://api.themoviedb.org/3',
params:{
    q:'',
    api_key: KEY
}

});


