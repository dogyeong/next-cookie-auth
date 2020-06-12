import Layout from '../components/Layout'
import Link from 'next/link'

export default function Index() {
    return (
        <Layout title="Home">
            <Link href="/profile">
                <a>Go To Profile</a>
            </Link>
        </Layout>
    )
}