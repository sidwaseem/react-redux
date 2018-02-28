import React, { Component, PropTypes } from 'preact-compat';
import { connect } from 'preact-redux';
import { loadProducts } from '../../actions/products';
import Post from './post';

/**
* Post component
* @class Post
*/
class Posts extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        product: PropTypes.arrayOf(PropTypes.object)
    };

    static defaultProps = {
        product: null
    };

    componentDidMount() {
        this.props.dispatch(loadProducts());
    }

    /**
    * render
    * @return {ReactElement} markup
    */
    render() {
        const { product } = this.props;
        const postItem = product.map((item) => {
            return <Post data={item} key={item.id} />;
        });

        return product && (
            <div className="jd-post-wrapper">
                {postItem}
            </div>
        );
    }
}
/**
 * dispatching State to Props
 * @param  {type} state [data]
 * @return {data}       [data json]
 */
const mapStateToProps = (state) => {
    const products = state.products.get('data');

    return {
        product: products && products.toJS()
    };
};

export default connect(mapStateToProps)(Posts);
