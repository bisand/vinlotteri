import React, { Component } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

export class Layout extends Component<any, any> {
    render() {
        return (
            <React.StrictMode>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </React.StrictMode>
        )
    }
}

export default Layout;
