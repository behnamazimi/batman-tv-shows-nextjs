import React from 'react';
import PropTypes from "prop-types";
import Link from 'next/link'
import Page from "../components/global-components/page.layouts";
import {showsServices} from "../services/shows.services";
import {appConstants} from "../constants/app.constants";

const Home = ({shows}) => {

    // generate elements of each show item as li
    const showsElements = shows.map((show, key) => (
        <li key={key}>
            <Link href={`/single-show?id=${show.id}`} as={`/show/${show.id}`}>
                <a>{show.name}</a>
            </Link>
        </li>
    ))

    return (
        <Page className={"home"}>
            <h1 className="page-title">{appConstants.APP_NAME}</h1>

            <ul className="shows-list">
                {showsElements}
            </ul>
        </Page>
    )
}

Home.getInitialProps = async (ctx) => {

    let shows = []

    // fetch shows list
    const showsRes = await showsServices.getAllShows({})
    if (showsRes.data)
        shows = showsRes.data

    return {shows}
}

Home.propTypes = {}

export default Home
