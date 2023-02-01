import React, { Component } from 'react'
import { FooterMain } from './FooterMain'
import { HeaderMain } from './HeaderMain'
import { Outlet } from 'react-router-dom'

export class LayoutMain extends Component<any, any> {
    render() {
        return (
            <React.StrictMode>
                <HeaderMain />
                <main>
                    <Outlet />
                </main>
                <FooterMain />
            </React.StrictMode>
        )
    }
}

export default LayoutMain;
