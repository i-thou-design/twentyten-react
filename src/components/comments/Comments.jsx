import React, {Component} from React;
import "./Comments.css";

class Comments extends React.Component {
    render() {
        if (this.props.protected) {
            return(
                <div id="comments">
                    <p className="nopassword">This post is password protected. Enter the password to view any comments.</p>
                </div><!-- #comments -->
            );
        }
        let titleString = 'One Response to ';
        if (this.props.post.commentsNumber > 1) {
            titleString = '${this.props.post.commentsNumber} Responses to ';
        }
        return(
            <div id="comments">
                <h3 id="comments-title">{titleString}"${this.props.post.title}"</h3>
                <ol className="commentlist">
                    {this.props.post.comments}
                </ol>
            </div><!-- #comments -->
        );
     }
