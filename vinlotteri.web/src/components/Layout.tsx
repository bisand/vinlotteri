import { Footer } from './Footer'
import { Header } from './Header'
import React, { Component } from 'react'

export class Layout extends Component<any, any> {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        )
    }
}
