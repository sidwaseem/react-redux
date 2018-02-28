import React, { Component, PropTypes } from 'preact-compat';
import { connect } from 'preact-redux';
import { push } from 'react-router-redux';
import Image from '../../components/image';

/**
* Post component
* @class Post
*/
class Post extends Component {

    static propTypes = {
        data: PropTypes.object,
        dispatch: PropTypes.func.isRequired
    };

    static defaultProps = {
        data: null
    };
    /**
    * render
    * @return {ReactElement} markup
    */
    render() {
        const { data, dispatch } = this.props;

        return data && (
            <div className="jd-post" id={data.id}>
                <div className="jd-row">
                    <div className="jd-avatar"><img src={data.userImage} alt="" /> {data.name}</div>
                    <div className="jd-location"><strong>{data.radius}m</strong> away</div>
                </div>
                <div class="jd-post-details">
                    <Image
                        imageUrl={data.image}
                        classList={'test-image'}
                        alt={data.title} />

                    <div className="jd-post-panel">
                        <h2 className="jd-post-heading">{data.title}</h2>
                        <p className="jd-post-price">{data.currency} {data.price}</p>
                    </div>
                    <div className="jd-post-share">
                        <button type="button" className="btn-link icon icon-share"><span className="icon-alt-text">share</span></button>
                        <button type="button" className="btn-link icon icon-heart"><span className="icon-alt-text">like</span></button>
                    </div>
                </div>
                <div class="jd-post-content">
                    <p className="jd-likes"><span className="icon icon-heart" /> {data.likes} likes</p>
                    <p className="jd-description">{data.text} <span className="jd-tags">{data.tags}</span></p>
                    <button className="btn-link jd-view-button" onClick={() => { dispatch(push({ pathname: '/products', hash: `#${data.id}` })); }}>View {data.comments && data.comments.length} comments</button>
                </div>
            </div>
        );
    }
}

export default connect()(Post);
