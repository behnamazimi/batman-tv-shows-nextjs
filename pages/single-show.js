import React from 'react';
import PropTypes from "prop-types";
import Page from "../components/global-components/page.layouts";
import {showsServices} from "../services/shows.services";
import truncate from "../utils/truncate-string";
import Rating from "../components/rating";
import {appConstants} from "../constants/app.constants";

const SingleShow = ({show}) => {

    console.log(show);

    if (!show || !show.id)
        return "Show Not Found!"

    // remove html tags from summary and truncate it to 100 char to pass as document SEO description
    const summary = truncate(show.summary.replace(/<\/?[^>]+(>|$)/g, ""))

    /**
     * show info box will render in this method
     */
    const renderShowInfoBox = () => {

        const {
            network, schedule, status, type, genres = [],
            officialSite = '', rating
        } = show

        return (
            <div className="show-info-box">
                <strong className="title">Show Info</strong>
                <ul className="inner">

                    {network && network.id &&
                    <li><strong>Network: </strong>
                        <span>{network.name || ''}</span></li>}

                    {schedule &&
                    <li><strong>Schedule: </strong>
                        <span>{`${(schedule.days || []).join(", ")} at ${schedule.time}`}</span></li>}

                    {status &&
                    <li><strong>Status: </strong>
                        <span>{status}</span></li>}

                    <li><strong>Show Type: </strong>
                        <span>{type || ''}</span></li>

                    {genres &&
                    <li><strong>Genres: </strong><span>{genres.join(", ")}</span></li>}

                    {officialSite &&
                    <li><strong>Official site: </strong>
                        <span><a href={officialSite} target="_blank">{officialSite}</a></span>
                    </li>}

                    {rating &&
                    <li><Rating base={10} small
                                rate={rating.average}/> <span>{rating.average || 0}</span></li>}
                </ul>
            </div>
        )
    }

    return (
        <Page className={"single-show"} title={`${show.name} - ${appConstants.APP_NAME}`}
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
                    <div className="row">
                        <div className="col-12 col-md-8">
                            {show.image && show.image.medium &&
                            <figure className="main-image">
                                <img src={show.image.medium} alt={show.name}/>
                            </figure>}
                            <div className="summary" dangerouslySetInnerHTML={{__html: show.summary}}/>
                        </div>
                        <div className="col-12 col-md-4">
                            {renderShowInfoBox()}
                        </div>
                    </div>
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

SingleShow.propTypes = {

    show: PropTypes.object

}

export default SingleShow
