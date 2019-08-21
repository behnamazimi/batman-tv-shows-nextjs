import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Head from "./head";
import Header from "./header";
import Footer from "./footer";

// import main sass file that contain all styles we need
import "../../styles/index.scss"

/**
 * Main layout of the pages
 */
function Page({title, description, className, children, ...rest}) {

    const classes = cx("page", "container", className)

    return (
        <React.Fragment>

            {/* Head component contains NextHead to override meta tags of the document */}
            <Head title={title} description={description}/>

            {/* Main header will render here */}
            <Header/>

            {/* Main content of pages will render here */}
            <main className={classes} {...rest}>
                {children}
            </main>

            {/* Main footer will render here */}
            <Footer/>

        </React.Fragment>
    )
}

Page.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Page;