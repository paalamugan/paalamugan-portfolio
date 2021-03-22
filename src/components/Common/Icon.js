import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name, alt, className }) => {

    alt = alt || ``;

    const arr = name.split(`.`);
    const ext = arr[1] || `svg`;

    name = arr[0];
    let isSvgExt = (ext === `svg`);

    let Image = require(`../../assets/images${ isSvgExt ? `/icons/` : `/` }${name}.${ext}`) // name should with image extension

    return (isSvgExt ? <Image className={className} data-cy={`${name}-icon`}/> :
                       <img className={className} src={Image.default} alt={alt || name}/>);

}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
}

export default Icon
