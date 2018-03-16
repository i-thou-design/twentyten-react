import React, {Component} from React;
import "./Sidebar.css";
import SearchForm from "./SearchForm.jsx";

class Sidebar extends React.Component {
    render() {
        if (! this.props.post.sidebarExists ) {
            return (
                <div id="primary" className="widget-area" role="complementary">
                    <ul className="xoxo">
                        <li id="search" className="widget-container widget_search">
                            <SearchForm />
                        </li>
                        <li id="archives" className="widget-container">
                            <h3 className="widget-title">Archives</h3>
                            <ul>
                                ${this.props.site.arhchives.monthly}
                            </ul>
                        </li>
                        <li id="meta" className="widget-container">
                            <h3 className="widget-title">Meta</h3>
                            <ul>
                                <li>${this.props.site.registerLink}</li>
                                <li>${this.props.site.loginoutLink}</li>
                                <li>${this.props.site.wpMeta}</li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- #primary .widget-area -->
            );
        } else return (
            <div id="primary" className="widget-area" role="complimentary">
                <ul className="xoxo">
                    ${this.props.post.sidebar.primary.widgets}
                </ul>
                <div id="secondary" className="widget-area" role="complimentary">
                    <ul className="xoxo">
                        ${this.props.post.sidebar.secondary.widgets}
                    </ul>
                </div><!-- #secondary .widget-area -->
            </div><!-- #primary .widget-area -->
        );
    }
}