import { useState, useEffect } from 'react'
import { getUserProfile } from '../lib/auth'
import Layout from '../components/Layout'

export default function Profile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserProfile()
            .then(user => {
                setUser({ user })
            })
    }, [])

    return (
        <Layout title="Profile">
            <pre>{JSON.stringify(user, null, '\t')}</pre>
        </Layout>
    )
}