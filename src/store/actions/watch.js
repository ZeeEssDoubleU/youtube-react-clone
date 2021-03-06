// video action types
export const types = {
	WATCH_DETAILS_REQUEST: "WATCH_DETAILS_REQUEST",
	WATCH_DETAILS_SUCCESS: "WATCH_DETAILS_SUCCESS",
	WATCH_DETAILS_FAILURE: "WATCH_DETAILS_FAILURE",
	UPDATE_WATCH_HISTORY: "UPDATE_WATCH_HISTORY",
	RELATED_VIDEOS_REQUEST: "RELATED_VIDEOS_REQUEST",
	RELATED_VIDEOS_SUCCESS: "RELATED_VIDEOS_SUCCESS",
	RELATED_VIDEOS_FAILURE: "RELATED_VIDEOS_FAILURE",
	RELATED_VIDEO_DETAILS_REQUEST: "RELATED_VIDEO_DETAILS_REQUEST",
	RELATED_VIDEO_DETAILS_SUCCESS: "RELATED_VIDEO_DETAILS_SUCCESS",
	RELATED_VIDEO_DETAILS_FAILURE: "RELATED_VIDEO_DETAILS_FAILURE",
	CHANNEL_DETAILS_REQUEST: "CHANNEL_DETAILS_REQUEST",
	CHANNEL_DETAILS_SUCCESS: "CHANNEL_DETAILS_SUCCESS",
	CHANNEL_DETAILS_FAILURE: "CHANNEL_DETAILS_FAILURE",
	COMMENTS_REQUEST: "COMMENTS_REQUEST",
	COMMENTS_SUCCESS: "COMMENTS_SUCCESS",
	COMMENTS_FAILURE: "COMMENTS_FAILURE",
	SAVE_VIDEO: "SAVE_VIDEO",
	SUBSCRIBE: "SUBSCRIBE",
};

export const action_fetchWatchDetails = {
	request: videoId => ({
		type: types.WATCH_DETAILS_REQUEST,
		payload: { videoId },
	}),
	success: response => ({
		type: types.WATCH_DETAILS_SUCCESS,
		payload: response,
	}),
	failure: response => ({
		type: types.WATCH_DETAILS_FAILURE,
		payload: response,
	}),
};

export const action_updateWatchHistory = videoId => ({
	type: types.UPDATE_WATCH_HISTORY,
	payload: { videoId },
});

export const action_fetchRelatedVideos = {
	request: (videoId, nextPageToken, amount) => ({
		type: types.RELATED_VIDEOS_REQUEST,
		payload: {
			videoId,
			nextPageToken,
			amount,
		},
	}),
	success: (response, videoId) => ({
		type: types.RELATED_VIDEOS_SUCCESS,
		payload: {
			response,
			videoId,
		},
	}),
	failure: response => ({
		type: types.RELATED_VIDEOS_FAILURE,
		payload: response,
	}),
};

export const action_fetchRelatedVideoDetails = {
	request: videoIds => ({
		type: types.RELATED_VIDEO_DETAILS_REQUEST,
		payload: { videoIds },
	}),
	success: response => ({
		type: types.RELATED_VIDEO_DETAILS_SUCCESS,
		payload: response,
	}),
	failure: response => ({
		type: types.RELATED_VIDEO_DETAILS_FAILURE,
		payload: response,
	}),
};

export const action_fetchChannelDetails = {
	request: channelId => ({
		type: types.CHANNEL_DETAILS_REQUEST,
		payload: { channelId },
	}),
	success: response => ({
		type: types.CHANNEL_DETAILS_SUCCESS,
		payload: response,
	}),
	failure: response => ({
		type: types.CHANNEL_DETAILS_FAILURE,
		payload: response,
	}),
};

export const action_fetchComments = {
	request: (videoId, nextPageToken, amount) => ({
		type: types.COMMENTS_REQUEST,
		payload: {
			videoId,
			nextPageToken,
			amount,
		},
	}),
	success: (response, videoId) => ({
		type: types.COMMENTS_SUCCESS,
		payload: {
			response,
			videoId,
		},
	}),
	failure: response => ({
		type: types.COMMENTS_FAILURE,
		payload: response,
	}),
};

export const action_saveVideo = videoId => ({
	type: types.SAVE_VIDEO,
	payload: { videoId },
});

export const action_subscribe = (channelId, channelTitle, channelIcon) => ({
	type: types.SUBSCRIBE,
	payload: {
		channelId,
		channelTitle,
		channelIcon,
	},
});
