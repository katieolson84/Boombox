import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>Boombox</h1>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                <FontAwesomeIcon className="icon" icon={faMusic} />
                Library 
            </button>
        </nav>
    )
}

export default Nav
