import axios from 'axios'

axios.defaults.withCredentials = true

const WINDOW_USER_SCRIPT_VARIABLE = '__USER__'

export const loginUser = async (email, password) => {
    const { data } = await axios.post('/api/login', { email, password })
    if (typeof window !== 'undefined') {
        window[WINDOW_USER_SCRIPT_VARIABLE] = data || {}
    }
}

export const getUserProfile = async () => {
    const { data } = await axios.get('/api/profile')
    return data
}

export const getServerSideToken = req => {
    const { signedCookies = {} } = req

    if (!signedCookies || !signedCookies.token) {
        return {}
    }

    return { user: signedCookies.token }
}

export const getUserScript = user => {
    return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)}`
}