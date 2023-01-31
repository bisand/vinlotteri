import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <React.StrictMode>
                <h1>Vinlotteri</h1>
                <p>Welcome to my website!</p>
                <nav>
                    <a href="/about">About</a>
                    <a href="/blog">Blog</a>
                    <a href="/notes">Notes</a>
                    <a href="/guestbook">Guestbook</a>
                    <a href="/contact">Contact</a>
                </nav>
            </React.StrictMode>
        )
    }
}

export default Header