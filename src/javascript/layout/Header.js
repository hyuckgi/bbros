import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { menus } from '../commons';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.renderMenus = this.renderMenus.bind(this);
        this.renderMark = this.renderMark.bind(this);
    }

    renderMark(){
        return(
            <span className="badge new">
                <i className="icon"></i>
            </span>
        )
    }

    renderMenus(){
        return(
            <ul className="gnb-warp">
                {menus.map((menu, idx) => {
                    return (
                        <li key={menu.id}>
                            <NavLink
                                to={menu.path}
                            >
                                {menu.isNew ? this.renderMark() : null}
                                {menu.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        )
    }

    render() {
        return (
            <header className="header">
                <div className="header-wrap">
                    <div className="header-wrap-left">
                        <Link
                            className="logo"
                            to="/"
                        >
                            <i className="icon"></i>
                        </Link>
                    </div>

                    <div className="header-wrap-right">
                        <Link
                            className="search"
                            to="/search"
                        >
                            <i className="icon"></i>
                        </Link>
                        <Link
                            className="bookmark"
                            to="/bookmark"
                        >
                            <i className="icon"></i>
                        </Link>
                    </div>
                </div>
                {this.renderMenus()}
            </header>
        );
    }

}

export default Header;
