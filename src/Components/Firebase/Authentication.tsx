import React, { ReactNode } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import GoogleGLogo from 'Assets/GoogleGLogo.svg'
import firebase from 'Config/Firebase'

// Sign-in data
const auth = getAuth(firebase)

const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}

const SignOut = () => auth.signOut()

// Function component
const GoogleButton = ({ children, onClick, src = GoogleGLogo }: { children?: ReactNode, onClick?: any, src?: string }): JSX.Element => (
  <button className='btn btn-link link-light d-flex flex-row align-items-center bg-dark border border-secondary rounded-pill p-1 text-decoration-none' onClick={() => onClick()}>
    {children}
    <img src={src} className={`${children ? 'ms-2' : ''} ${src ? 'rounded-circle' : ''} pe-none inline-image`} />
  </button>
)

const Login = (): JSX.Element => {
  const [user] = useAuthState(auth)
  const image: string = user?.photoURL || ''

  return (
    <div className='col-md-4 d-flex flex-row align-items-center justify-content-end'>
      {user
        // Logged in
        ? <GoogleButton onClick={SignOut} src={image}>
          <span className="ms-2">{user.displayName}</span>
        </GoogleButton>

        // Not logged in
        : <GoogleButton onClick={SignInWithGoogle} />
      }
    </div>
  )
}

export default Login
