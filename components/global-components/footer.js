import React from 'react';
import cx from "classnames";
import Link from "next/link";

function Footer({className, ...rest}) {

    const classes = cx('main-footer', className)

    return (
        <footer className={classes} {...rest}>
            <p>Rights reserved. | Code by ♥</p>
        </footer>
    )
}

Footer.propTypes = {};

export default Footer;