import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>Vinlotteri</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/notes">Notes</Link>
                    <Link to="/guestbook">Guestbook</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
        )
    }
}
