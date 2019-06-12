import React, { Component } from 'react'
import SiteNav from '../../components/header/SiteNav'
import {
    inner,
    outer,
    SiteDescription,
    SiteHeader,
    SiteHeaderContent,
    SiteTitle,
  } from '../../styles/shared';
import config from '../../website-config';

const logo = require('../../content/img/logo-white.png');

export default class Header extends Component<any, any> {
    render() {
        return (
            <header
                className={`${SiteHeader} ${outer}`}
                style={{
                    backgroundImage: `url('${this.props.data.header.childImageSharp.fluid.src}')`,
                }}
                >
                <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom:0, background: 'rgb(17, 17, 31)' }}>
                    <div id="threejs"></div>
                </div>
                <div className={`${inner}`}>
                    <SiteHeaderContent>
                    <SiteTitle>
                        {this.props.data.logo ? (
                        <img
                            style={{ maxHeight: '45px', marginBottom: '35px' }}
                            src={logo}
                            alt={config.title}
                        />
                        ) : (
                            config.title
                        )}
                    </SiteTitle>
                    <SiteDescription>{config.description}</SiteDescription>
                    </SiteHeaderContent>
                    <SiteNav isHome={true} />
                </div>
            </header>
        )
    }
}
