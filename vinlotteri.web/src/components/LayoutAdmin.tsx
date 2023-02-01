import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import FooterMain from './FooterMain';
import HeaderAdmin from './HeaderAdmin';

export class LayoutAdmin extends Component<any, any> {
    render() {
        return (
            <React.StrictMode>
                <HeaderAdmin />
                <main>
                    <Outlet />
                </main>
                <FooterMain />
            </React.StrictMode>
        )
    }
}

export default LayoutAdmin;
