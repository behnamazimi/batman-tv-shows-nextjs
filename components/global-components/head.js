import NextHead from 'next/head'
import {string} from 'prop-types'
import {appConstants} from "../../constants/app.constants";

const defaultTitle = appConstants.APP_NAME;
const defaultDescription = appConstants.APP_DESC_META;
const defaultKeywords = appConstants.APP_KEYWORDS_META;
const defaultOGURL = appConstants.APP_URL;
const defaultOGImage = appConstants.APP_OGIMAGE;

const Head = (props) => (
    <NextHead>
        <meta charSet="UTF-8"/>
        <meta name="theme-color" content={appConstants.MAIN_COLOR_CODE}/>

        <link rel="icon" sizes="192x192" href="/static/touch-icon.png"/>
        <link rel="apple-touch-icon" href="/static/touch-icon.png"/>
        {/*<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882"/>*/}
        <link rel="icon" href="/static/favicon.ico"/>

        <title>{props.title || defaultTitle}</title>
        <meta name="description" content={props.description || defaultDescription}/>
        <meta name="keywords"
              content={defaultKeywords}/>
        <meta name="subject" content={appConstants.APP_NAME}/>
        <meta name="copyright" content={appConstants.APP_NAME}/>
        <meta name="author" content={appConstants.APP_NAME}/>
        <meta name="country" content="IRAN"/>
        <meta name="distribution" content="global"/>
        <meta name="rating" content="safe for kids"/>
        <meta name="language" content="Persian"/>

        <meta property="og:url" content={props.url || defaultOGURL}/>
        <meta property="og:title" content={props.title || defaultTitle}/>
        <meta property="og:description" content={props.description || defaultDescription}/>
        <meta name="twitter:site" content={props.url || defaultOGURL}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image" content={props.ogImage || defaultOGImage}/>
        <meta property="og:image" content={props.ogImage || defaultOGImage}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta name='viewport' content='width=device-width,minimum-scale=1'/>

    </NextHead>
)

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string
}

export default Head;
