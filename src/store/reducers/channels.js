import { createSelector } from "reselect";
import * as watchActions from "../actions/watch";

const initialState = {
	byId: {},
};

//***************
// root reducer
//***************

const reducer_channels = (state = initialState, action) => {
	switch (action.type) {
		case watchActions.types.CHANNEL_DETAILS_SUCCESS:
			return reducer_fetchChannelDetails(action.payload, state);
		default:
			return state;
	}
};
export default reducer_channels;

//***************
// sub reducers
//***************

const reducer_fetchChannelDetails = (payload, state) => {
	const channel = payload.items[0];

	// console.log("PAYLOAD - CHANNEL DETAILS", payload);

	// stores channels by channelId in state.channels.byId
	return {
		...state,
		byId: {
			...state.byId,
			[channel.id]: channel,
		},
	};
};

//***************
// selectors
//***************

export const selector_channelDetails = createSelector(
	(state, videoId) => state.videos.byId[videoId],
	state => state.channels.byId,
	(video, channels) => {
      if (video) {
         const channelId = video.snippet.channelId;
         return channels[channelId];
      }
		return null;
	},
);
