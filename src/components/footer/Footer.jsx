import React, {Component} from React;
import "./Footer.css";
import SidebarFooter from "../sidebar/SidebarFooter.jsx";

class Footer extends React.Component {
    render() {
        <div id="footer" role="contentinfo">
            <div id="colophon">
                <SidebarFooter />
                <div id="site-info">
                    <a href="${this.props.site.url}" title="{this.props.site.name}" rel="home">{this.props.site.name}</a>
                </div><!-- #site-info -->
                <div id="site-generator">
                    <a href="https://wordpress.org/twentyten" title="Semantic Personal Publishing Platform">Proudly Powered by WordPress</a>
                </div><!-- #site-generator -->
            </div><!-- #colophon -->
        </div><!-- #footer -->
    }
}