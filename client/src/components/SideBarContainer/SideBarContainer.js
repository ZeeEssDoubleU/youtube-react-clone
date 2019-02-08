import React, { Component } from "react";
import { Menu, Divider } from "semantic-ui-react";

import "./SideBarContainer.scss";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import SideBarItem from "./SideBarItem/SideBarItem";
import Subscriptions from "./Subscriptions/Subscriptions";
import SideBarFooter from "./SideBarFooter/SideBarFooter";

class SideBarContainer extends Component {
	render() {
		return (
			<Menu borderless vertical stackable fixed="left" className="side-nav">
				<SideBarItem label="Home" icon="home" highlight={true} />
				<SideBarItem label="Trending" icon="fire" />
				<SideBarItem label="Followers" icon="spy" />
				<Divider />
				<SideBarHeader title="Library" />
				<SideBarItem label="History" icon="history" />
				<SideBarItem label="Watch" icon="clock" />
				<SideBarItem label="Liked videos" icon="thumbs up" />
				<Divider />
				<Subscriptions />
				<SideBarHeader title="More From Youtube" />
				<SideBarItem label="Movies and Shows" icon="film" />
				<Divider />
				<SideBarItem label="Settings" icon="setting" />
				<SideBarItem label="Report history" icon="flag" />
				<SideBarItem label="Help" icon="help circle" />
				<SideBarItem label="Send feedback" icon="comment" />
				<Divider />
            <SideBarFooter />
			</Menu>
		);
	}
}

export default SideBarContainer;