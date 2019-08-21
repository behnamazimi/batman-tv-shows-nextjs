import React from 'react';
import PropTypes from "prop-types";
import Page from "../components/global-components/page.layouts";
import {appConstants} from "../constants/app.constants";

const About = (props) => {

    return (
        <Page className={"about"} title={`About - ${appConstants.APP_NAME}`}
              description={"About SEO description"}>
            <h1 className="page-title">About App</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi.</p>
        </Page>
    )
}

About.getInitialProps = async (ctx) => {


    return {}
}

About.propTypes = {}

export default About
