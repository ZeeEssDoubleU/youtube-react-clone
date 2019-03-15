import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Image } from "semantic-ui-react";

import { getFormattedTimeAgo } from "../../utils/format-time";

import "./Comment.scss";
import Ratings from "../Ratings/Ratings";

const Comment = props => {
	const [collapsed, toggleCollapse] = useState(true);

	const comment = props.comment.snippet.topLevelComment.snippet;
	const commentText = <p className="comment-text">{comment.textOriginal}</p>;
	const commentAuthor = comment.authorDisplayName;
	const commentDate = getFormattedTimeAgo(comment.updatedAt);
	const commentLikes = comment.likeCount;

	const commentVisibility = collapsed ? "collapsed" : "expanded";
	const buttonText = collapsed ? "Read more" : "Read less";

	return (
		<div className="comment">
			<Image
				className="user-image"
				src="http://via.placeholder.com/48x48"
				circular
			/>
			<div className="comment-items">
				<div className="user-name">{commentAuthor}</div>
				<div className="comment-date">{commentDate}</div>
				<div className="comment-body">
					<div className={commentVisibility}>{commentText}</div>
					<Button
						className="show-more-button"
						compact
						onClick={() => toggleCollapse(!collapsed)}>
						{buttonText}
					</Button>
				</div>
				<div className="comment-actions">
					<Ratings likes={commentLikes} comment={true} />
					<Button size="mini" compact>
						REPLY
					</Button>
				</div>
			</div>
		</div>
	);
};

Comment.propTypes = {};

export default Comment;
