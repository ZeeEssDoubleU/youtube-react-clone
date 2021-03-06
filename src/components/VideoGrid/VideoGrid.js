import React from "react";
import { Divider } from "semantic-ui-react";

import "./VideoGrid.scss";
import VideoGridHeader from "./VideoGridHeader";
import VideoPreview from "../VideoPreview/VideoPreview";

const VideoGrid = props => {
	if (!props.videos || !props.videos.length) return <div />;

	const gridItems = props.videos.map(video => {
		return <VideoPreview video={video} key={video.id} />;
	});

	const divider = props.hideDivider ? null : <Divider />;
	return (
		<div className="video-section-container">
			<div className="video-section">
				<div className="video-grid">
					<VideoGridHeader
						className="video-grid-header"
						title={props.title}
					/>
					{gridItems}
				</div>
				{divider}
			</div>
		</div>
	);
};

export default VideoGrid;
