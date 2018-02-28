import React, { Component, PropTypes } from 'preact-compat';
import { connect } from 'preact-redux';
import { loadProducts } from '../../actions/products';
import Image from '../../components/image';

/**
* Product component
* @class Product
*/
class Product extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        product: PropTypes.object,
        posts: PropTypes.array
    };

    static defaultProps = {
        product: null,
        posts: []
    };

    /*
     * Product construtor method
     * @constructor
     */
    constructor(...props) {
        super(...props);
        this.state = {
            update: false
        };
        // reset scroll position
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.dispatch(loadProducts());
    }

    /**
    * formSubmitHandler
    * @function formSubmitHandler
    */
    formSubmitHandler = () => {
        const comment = this.textInput.value;
        if (comment.trim().length > 0) {
            this.setState({
                update: true
            });
            // Note:  In real time application use dispatch to update store instead of props
            this.props.posts.push(comment);
        }
    };
    /**
    * render
    * @return {ReactElement} markup
    */
    render() {
        const { product, posts } = this.props;
        return product && (
            <div className="jd-post" id={product.id}>
                <div className="jd-row">
                    <div className="jd-avatar"><img src={product.userImage} alt="" /> {product.name}</div>
                    <div className="jd-location"><strong>{product.radius}m</strong> away</div>
                </div>
                <div class="jd-post-details">
                    <Image
                        imageUrl={product.image}
                        classList={'test-image'}
                        alt={product.title} />

                    <div className="jd-post-panel">
                        <h2 className="jd-post-heading">{product.title}</h2>
                        <p className="jd-post-price">{product.currency} {product.price}</p>
                    </div>
                    <div className="jd-post-share">
                        <button type="button" className="btn-link icon icon-share"><span className="icon-alt-text">share</span></button>
                        <button type="button" className="btn-link icon icon-heart"><span className="icon-alt-text">like</span></button>
                    </div>
                </div>
                <div className="jd-post-content ">
                    <p className="jd-likes"><span className="icon icon-heart" /> {product.likes} likes</p>
                    <p className="jd-description">{product.text} <span className="jd-tags">{product.tags}</span></p>
                </div>

                <div className="jd-post-comments-wrapper jd-post-content">
                    { this.state.update && posts.length && posts.map(function (item) {
                        return ([
                            <div className="jd-post-content-comments">
                                <div className="jd-avatar"><img src="./images/waseem.png" alt="" /></div>
                                <p className="jd-description"><span className="jd-tags">Waseem Siddiqui</span> {item}</p>
                            </div>
                        ]);
                    })}
                    {product.comments.map(function (cmnt) {
                        return ([
                            <div className="jd-post-content-comments">
                                <div className="jd-avatar"><img src={cmnt.userimage} alt="" /></div>
                                <p className="jd-description"><span className="jd-tags">{cmnt.username}</span> {cmnt.text}</p>
                            </div>
                        ]);
                    })}
                </div>
                <div className="jd-post-input-wrapper">
                    <input type="text" className="jd-post-input" placeholder="Write comment" ref={(input) => { this.textInput = input; }} />
                    <button type="button" className="btn icon icon-compass" onClick={this.formSubmitHandler.bind(this)}><span className="icon-alt-text">Send</span></button>
                </div>
            </div>
        );
    }
}

/**
 * mapStateToProps State to Props
 * @param  {Object} state state object
 * @return {Object} product data
 */
const mapStateToProps = (state) => {
    const products = state.products.get('data');
    const filteredProduct = products.find((product) => {
        let value = 1;
        if (location && location.hash.length) {
            value = parseInt(location.hash.slice(1, 10), 10);
        }
        return product.get('id') === value;
    });

    return {
        product: filteredProduct && filteredProduct.toJS()
    };
};

export default connect(mapStateToProps)(Product);
