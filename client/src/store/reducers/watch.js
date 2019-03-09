import { createSelector } from "reselect";
import * as watchActions from "../actions/watch";

const initialState = {
	details: {},
	relatedVideos: {},
};

//***************
// WATCH REDUCERS
//***************

const reducer_watch = (state = initialState, action) => {
	switch (action.type) {
		case watchActions.types.WATCH_DETAILS_SUCCESS:
			return reducer_fetchWatchDetails(action.payload, state);
		case watchActions.types.RELATED_VIDEOS_SUCCESS:
			return reducer_fetchRelatedVideos(action.payload, state);
		default:
			return state;
	}
};

export default reducer_watch;

const reducer_fetchWatchDetails = (payload, state) => ({
	...state,
	details: payload.items[0],
});

const reducer_fetchRelatedVideos = (payload, state) => {
	const videoIds = payload.response.items.map(item => item.id.videoId);

	const relatedVideos = {
		totalResults: payload.response.pageInfo.totalResults,
		nextPageToken: payload.response.nextPageToken,
		videoIds,
	};

	// combine previous vids into state (same as above)
	return {
		...state,
		relatedVideos,
	};
};

//***************
// SELECTORS
//***************

export const selector_watchDetails = state => state.watch.details;
export const selector_relatedVideoIds = state =>
	state.watch.relatedVideos.videoids;
