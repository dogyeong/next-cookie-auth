import LoginForm from '../components/LoginForm'
import Layout from '../components/Layout'
import { authInitialProps } from '../lib/auth'

export default function Login(props) {
    return (
        <Layout title="Login" {...props}>
            <LoginForm />
        </Layout>
    )
}

Login.getInitialProps = authInitialProps()