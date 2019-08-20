/**
 * method to truncate strings
 *
 * @param string
 * @param len
 * @returns {*}
 */
function truncate(string, len = 100) {
    if (!string)
        return null

    string = string.replace(/<[^>]*>/g, '')

    if (string.length > len)
        return string.substring(0, len) + '...';

    return string;
}

export default truncate