export default function Signup ({user, setUser}) {
    return (
        <>
    <h2>Sign up </h2>
    <button onClick={() => setUser("New User")}>Sign up</button>
    </>
    )
}