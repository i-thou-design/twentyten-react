import React, {Component} from React;
import "./Header.css";
import NavMenu from "../navmenu/NavMenu.jsx";

class Header extends React.Component {
    render () {
        <div id="header">
            <div id="masthead">
                <div id="branding" role="banner">
                    <h1 id="site-title"><span><a href="${this.props.site.homeurl}/" title="${this.props.site.name}" rel="home">${this.props.site.name}</a></span></h1>
                    <div id="site-description">${this.props.site.description}</div>
                    if ( !this.props.post.thumbnail ) {
                        return (
                            <img src="${this.props.site.headerImage}" width="${this.props.site.headerImage.width}" height="${this.props.site.headerImage.height}" alt="" />
                        );
                    } else {
                        return (
                            <img src="${this.props.post.thumbnail}" width="${this.props.post.thumbnail.width}" height="$this.props.post.thumbnail.height}" alt="" />
                        );
                    }
                </div><!-- #branding -->
                <div id="access" role="navigation">
                    <div className="skip-link screen-reader-text"><a href="#content" title="Skip to content">Skip to content</a></div>
                    <NavMenu containerClass="menu-header" themeLocation="primary" />
                </div><!-- #access -->
            </div><!-- #masthead -->
        </div><!-- #header -->
    }
}