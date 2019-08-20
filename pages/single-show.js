import React from 'react';
import PropTypes from "prop-types";
import Page from "../components/global-components/page.layouts";
import {showsServices} from "../services/shows.services";
import truncate from "../utils/truncate-string";

const SingleShow = ({show}) => {

    console.log(show);

    if (!show || !show.id)
        return "Show Not Found!"

    // remove html tags from summary and truncate it to 100 char to pass as document SEO description
    const summary = truncate(show.summary.replace(/<\/?[^>]+(>|$)/g, ""))

    return (
        <Page className={"single-show"} title={show.name}
              description={summary}>

            <article className="show-article">
                <header>
                    <h1 className="show-name">{show.name}</h1>
                    {show.url &&
                    <span className="more-link">
                        <a href={show.url} target="_blank">Show in tvmaze.com</a>
                    </span>}
                </header>

                <main>
                    {show.image && show.image.medium &&
                    <figure className="main-image">
                        <img src={show.image.medium} alt={show.name}/>
                    </figure>}
                    <div className="summary" dangerouslySetInnerHTML={{__html: show.summary}}/>
                </main>

            </article>

        </Page>
    )
}

SingleShow.getInitialProps = async (ctx) => {

    const {id} = ctx.query

    let show = null;

    // fetch show by id
    const showRes = await showsServices.getSingleShow(id)
    if (showRes.data)
        show = showRes.data

    return {show}
}

SingleShow.propTypes = {}

export default SingleShow
