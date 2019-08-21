import React from 'react';
import cx from "classnames";
import Link from "next/link";
import Nav from "../nav";

function Header({className, ...rest}) {

    const classes = cx('main-header', className)

    return (
        <header className={classes} {...rest}>
            <div className="container main-header-inner">
                <Link href={"/"}>
                    <a className={"brand-name"}>Batman TV Shows</a>
                </Link>

                <Nav/>
            </div>
        </header>
    )
}

Header.propTypes = {};

export default Header;