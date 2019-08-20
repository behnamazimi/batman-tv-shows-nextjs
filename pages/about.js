import React from 'react';
import PropTypes from "prop-types";
import Page from "../components/global-components/page.layouts";

const About = (props) => {

    return (
        <Page className={"about"} title={"About"} description={"About SEO description"}>
            <h1 className="page-title">About App</h1>

        </Page>
    )
}

About.getInitialProps = async (ctx) => {


    return {}
}

About.propTypes = {}

export default About
