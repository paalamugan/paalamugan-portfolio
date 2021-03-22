import PropTypes from 'prop-types';

/* modifiedGraphqlData*/
export const modifiedGraphqlData = function modifiedGraphqlData(data) {

    data = { ...data , ...data.markdownRemark.frontmatter }
    data.html = data.markdownRemark.html
    delete data.markdownRemark;

    if (data.common) {
        data = { ...data.common.frontmatter, ...data }
        delete data.common;
    }

    data.header = data.header;
    data.footer = data.footer;

    return data;
}

modifiedGraphqlData.propTypes = {
    data:  PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape().isRequired,
        }).isRequired,
        header: PropTypes.shape().isRequired,
        footer: PropTypes.shape().isRequired,
    }).isRequired,
}

export const splitMarkDownText = function splitMarkDownText(value) {

    if (!value) {
        return null;
    }

    value = value.replace(/([\r\n])+/g, `split`);

    let arr = value.split(`split`);

    return arr.map((text) => text && text.trim());
}

