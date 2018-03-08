import React, {Component} from React;
import "./Comments.css";

class Comments extends Component {
    render() {
        <div id="comments">
            <h3 id="comments-title">{this.props.commentsNumber} Responses to {this.props.postTitle}</h3>
            // Page Navigation - import from another component ??
            <ul>
                <li class={this.props.commentClass} id="li-comment-{this.props.commentID}">
                    //Vcard component -- <Vcard avatar={this.props.comment} />
                    if (this.props.commentApproved == 0) {
                        <em class="comment-awaiting-moderation">Your comment is awaiting moderation</em>
                    } else {
                        <div class="commentMeta commentMetaData">
                            {this.props.commentDate}
                            {this.props.commentTime}
                            {this.props.commentEditLink}
                        </div>
                        <div class="commentBody">
                            {this.props.commentText}
                        </div>
                        <ReplyLink /> // additional component
             </ul>
         </div><!-- comments -->
     }

