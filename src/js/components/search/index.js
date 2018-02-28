import React, { Component, PropTypes } from 'preact-compat';
import { connect } from 'preact-redux';
import Slider from 'rc-slider';
/**
* Search component
* @class Search
*/
class Search extends Component {
    /*
     * Search construtor method
     * @constructor
     */
    constructor(...props) {
        super(...props);
        this.state = {
            value: 300
        };
    }
    /*
     * Handler for slider change
     * @function onSliderChange
     */
    onSliderChange = (value) => {
        this.setState({
            value
        });
    };

    /**
    * render
    * @return {ReactElement} search markup
    */
    render() {
        return (
            <section className="jd-search-wrapper">
                <div className="jd-search-input-wrapper">
                    <input type="text" className="jd-search-input" placeholder="What are you looking for?" />
                </div>
                <div className="jd-search-slider">
                    <h2 className="jd-search-header">Search within <strong>{this.state.value}km</strong></h2>
                    <Slider
                        defaultValue={this.state.value}
                        min={0}
                        max={1000}
                        onChange={this.onSliderChange}
                        />
                </div>
                <div className="jd-search-content">
                    <h3>Trending Search</h3>
                    <div className="jd-tags-wrapper">
                        <span className="jd-tag-item">#hammrock</span>
                        <span className="jd-tag-item">#iceberg</span>
                        <span className="jd-tag-item">#lettuceleaf</span>
                        <span className="jd-tag-item">#isxv8</span>
                        <span className="jd-tag-item">#itsacircusfever</span>
                        <span className="jd-tag-item">#marvel</span>
                        <span className="jd-tag-item">#whenindubai</span>
                        <span className="jd-tag-item">#lingenfelter</span>
                        <span className="jd-tag-item">#cat</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect()(Search);
