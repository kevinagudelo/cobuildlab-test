import React from "react";
import { useAuth0} from '@auth0/auth0-react'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <button id="LoginBtn" className="btn btn-lg btn-success" onClick={() => loginWithRedirect()}>
            Log in
        </button>
    )
}

export default LoginButton