import useSWR from 'swr'
import axios from './axios'

import axiosPublic from './axiosPublic'

import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function useAuth({middleware} = {}) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (user || error) {
            setIsLoading(false);
        }

        if (middleware == 'guest' && user) router.push('/')
        if (middleware == 'auth' && !user && error) router.push('/login')
    })

    // const {data: user, error, mutate} = useSWR('/user',
    //     () => axios.get('/user').then(response => response.data.data)
    // )

    const {data: user, error, mutate} = useSWR('/me',
    () => axios.get('/me').then(response => {
        response.data.data
        console.log('utilisateur recupe des informations')
        console.log(response.data)
    } )
)

    const csrf = () => axiosPublic.get('/sanctum/csrf-cookie')

    const login = async ({setErrors, ...props}) => {
        setErrors([])

        // await csrf()

        axios
            .post('/login', props)
            .then((data) => {
                mutate() && router.push('/login')
                console.log(data)
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.data.access_token}`;
                console.log(data.data.access_token)


            })
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const logout = async () => {
        await axios.post('/logout')

        mutate(null)

        router.push('/login')
    }

    return {
        user,
        csrf,
        login,
        logout,
        isLoading
    }
}