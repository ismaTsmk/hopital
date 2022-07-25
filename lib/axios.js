import axios from 'axios';


export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL+'/api',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': 'Bearer ' +44454
        Accept: 'application/json' 
    },
    withCredentials: true,
});



