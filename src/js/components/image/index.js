import React, { Component, PropTypes } from 'preact-compat';
import classNames from 'classnames';

/**
* Image component
* @class Image
*/
class Image extends Component {
    static propTypes = {
        alt: PropTypes.string,
        imageUrl: PropTypes.string,
        classList: PropTypes.string
    };

    static defaultProps = {
        alt: null,
        imageUrl: null,
        classList: []
    };

    /**
    * render
    * @return {ReactElement} markup
    */
    render() {
        const { imageUrl, classList, alt } = this.props;
        const altText = alt || '';
        return (
            <figure className={classNames('jd-figure', classList)}>
                <img src={imageUrl} alt={altText} className="jd-image jd-image-narrow" />
            </figure>
        );
    }
}
export default Image;
