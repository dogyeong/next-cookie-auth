import Link from 'next/link'

export default function Layout({ title, children }) {
    return (
        <div className="root">
            <nav className="navbar">
                <span>Welcome, <strong>Guest</strong></span>

                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/profile">
                        <a>Profile</a>
                    </Link>
                    <button>Logout</button>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </div>
            </nav>

            <h2>{title}</h2>

            {children}

            <style jsx>{`
                .root {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
                .navbar {
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                }
                a {
                    margin-right: 0.5em;
                }
                button {
                    text-decoration: underline;
                    padding: 0;
                    font: inherit;
                    cursor: pointer;
                    border-style: none;
                    color: rgb(0, 0, 238);
                }
            `}</style>
        </div>
    )
}