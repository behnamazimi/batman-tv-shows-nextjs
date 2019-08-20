import * as axios from "axios";
import {appConstants} from "../constants/app.constants";

/**
 * fetch all shows from server
 *
 * @param params
 * @returns Promise
 */
function getAllShows(params = {}) {

    return axios({
        method: 'get',
        url: appConstants.API_URL + "/shows",
        headers: {
            'Content-Type': 'application/json',
        },
        params
    })
}

/**
 * fetch single show by id from server
 *
 * @param id
 * @param params
 * @returns {never}
 */
function getSingleShow(id, params = {}) {

    return axios({
        method: 'get',
        url: appConstants.API_URL + `/shows/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        params
    })
}

export const showsServices = {
    getAllShows,
    getSingleShow,
}