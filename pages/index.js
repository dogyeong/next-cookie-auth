import Layout from '../components/Layout'
import Link from 'next/link'
import { authInitialProps } from '../lib/auth'

export default function Index(props) {
    return (
        <Layout title="Home" {...props}>
            <Link href="/profile">
                <a>Go To Profile</a>
            </Link>
        </Layout>
    )
}

Index.getInitialProps = authInitialProps()