import axios from 'axios';


// export default axios.create({
//     baseURL: 'http://127.0.0.1:8000/api',
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         // 'Authorization': 'Bearer ' +44454
//         Accept: 'application/json' 

//     },
//     withCredentials: true,
// });

const axiosPublic = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Authorization': 'Bearer ' +44454
        Accept: 'application/json' 

    },
    withCredentials: true,
});


export default axiosPublic


