import { useState } from 'react'
import { loginUser } from '../lib/auth'
import Router from 'next/router'

export default function LoginForm() {
    const [email, setEmail] = useState('Sincere@april.biz')
    const [password, setPassword] = useState('hildegard.org')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        setError('')
        setIsLoading(true)

        loginUser(email, password)
            .then(() => {
                Router.push('/profile')
            })
            .catch(err => {
                setError(err.response?.data || err.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button disabled={isLoading} type="submit">
                {isLoading ? "Sending" : "Submit"}
            </button>
            {error && <div>{error}</div>}
        </form>
    )
}