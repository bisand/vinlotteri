import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HeaderMain extends Component {
    render() {
        return (
            <header>
                <h1>Vinlotteri</h1>
                <nav>
                    <Link to="/">Informasjon</Link>
                    <Link to="/admin">Nytt lotteri</Link>
                    <Link to="/blog">Lotterier</Link>
                    <Link to="/notes">Profil</Link>
                    <Link to="/guestbook">Hjelp</Link>
                </nav>
            </header>
        )
    }
}

export default HeaderMain;
