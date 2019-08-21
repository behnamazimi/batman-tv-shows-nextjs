import React, {useState} from "react";
import PropTypes from "prop-types"
import cx from 'classnames'
import {FaStar, FaRegStar} from "react-icons/fa";

function Rating(props) {

    const {className, base = 5, small, large, onChange, readOnly} = props

    const [rate, setRate] = useState(props.rate || 0)

    const handleRateChange = (r) => {

        if (readOnly)
            return;

        if (rate === r)
            setRate(r - 1)
        else
            setRate(r)

        if (onChange)
            onChange(r)
    }

    const classes = cx(
        'btv rating',
        rate,
        readOnly && 'read-only',
        small && 'small',
        large && 'large',
        className,
    );

    // stars render by this method
    const renderRatesStars = () => Array.from(Array(base).keys()).map(index => (
        <span onClick={() => handleRateChange(index + 1)}>
            {rate >= index + 1 ? <FaStar className='icon'/> : <FaRegStar className='reg-icon'/>}
        </span>
    ))


    return (
        <div className={classes}>

            {renderRatesStars()}

        </div>
    )
}

Rating.propTypes = {

    // numbers of stars in rating
    base: PropTypes.number,

    // current rate of the rating system
    rate: PropTypes.number,

    large: PropTypes.bool,

    small: PropTypes.bool,

    className: PropTypes.string,

    onChange: PropTypes.func,

};

Rating.defaultProps = {};


export default Rating