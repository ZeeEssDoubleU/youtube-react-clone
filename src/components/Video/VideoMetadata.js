import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";

import "./VideoMetadata.scss";
import Ratings from "../Ratings/Ratings";

const VideoMetadata = props => {
	if (!props.video) return <div />;

	const videoId = props.video.id;
	const isSaved = props.savedVideos[videoId] ? true : false;

	const title = props.video.snippet.title;
	const viewCount = Number(props.video.statistics.viewCount).toLocaleString();
	const likeCount = Number(props.video.statistics.likeCount);
	const dislikeCount = Number(props.video.statistics.dislikeCount);
	const saveText = isSaved ? "SAVED" : "SAVE";
	const highlightSaved = isSaved ? " highlight" : "";

	return (
		<div className="video-metadata">
			<h3>{title}</h3>
			<div className="video-stats">
				<span>{viewCount} views</span>
				<div className="video-actions">
					<Ratings
						likes={likeCount}
						dislikes={dislikeCount}
						isVideo={true}
						videoId={videoId}
						ratingsBar={true}
					/>
					<Button className="share" basic labelPosition="left">
						<Icon name="share" />
						<span>SHARE</span>
					</Button>
					<Button
						basic
						labelPosition="left"
						onClick={() => {
							props.saveVideo(videoId);
						}}>
						<Icon name="add circle" className={"save" + highlightSaved} />
						<span className={highlightSaved}>{saveText}</span>
					</Button>
					<Button basic className="ellipsis">
						<Icon name="ellipsis horizontal" />
					</Button>
				</div>
			</div>
			<Divider />
		</div>
	);
};

export default VideoMetadata;
