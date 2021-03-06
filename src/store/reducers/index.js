import { combineReducers } from "redux";
import reducer_user from "./user";
import reducer_session from "./session";
import reducer_videos from "./videos";
import reducer_watch from "./watch";
import reducer_channels from "./channels";
import reducer_comments from "./comments";
import reducer_search from "./search";
import reducer_errors from "./errors";

const reducer_root = combineReducers({
	user: reducer_user,
	session: reducer_session,
	videos: reducer_videos,
	watch: reducer_watch,
	channels: reducer_channels,
	comments: reducer_comments,
	search: reducer_search,
	errors: reducer_errors,
});
export default reducer_root;
