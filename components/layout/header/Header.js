import styles from './Header.module.sass'
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <header
      className={styles.header}
      style={{ left: '250px' }}
    >
      {session ?
        <>
          Signed in as {session.user.email} <br/>
          <h4>Email: {session.user.email}</h4>
          {session.user.image && (
            <span>
                <img src={session.user.image} alt={session.user.name}/>
              </span>
          )}
          <button onClick={() => signOut()}>Sign out</button>
        </>
        :
        <>
          Not signed in <br/>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      }
    </header>
  )
}

export default Header