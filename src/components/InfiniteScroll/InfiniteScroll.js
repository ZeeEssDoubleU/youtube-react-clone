import React from "react";
import { Waypoint } from "react-waypoint";
import { Loader } from "semantic-ui-react";

import "./InfiniteScroll.scss";

const InfiniteScroll = props => (
	<>
		{props.children}
		<Waypoint onEnter={props.bottomReachedCallback}>
			<div className="loader-container">
				<Loader active={props.showLoader} inline="centered" />
			</div>
		</Waypoint>
	</>
);

export default InfiniteScroll;
