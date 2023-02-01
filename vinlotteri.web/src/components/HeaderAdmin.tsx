import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class HeaderAdmin extends Component {
    render() {
        return (
            <header>
                <h1>Vinlotteri - Admin</h1>
                <nav>
                    <Link to="/admin">Informasjon</Link>
                    <Link to="/admin/prizes">Premier</Link>
                    <Link to="/admin/controlpanel">Kontrollpanel</Link>
                    <Link to="/admin/sharing">Deling</Link>
                    <Link to="/admin/help">Hjelp</Link>
                </nav>
            </header>
        )
    }
}

export default HeaderAdmin;
