import * as types from '../constants/actionTypes';

export function getVideos() {
  // call from api for video list
  let videos = [
   {
      "name":"Yomaste Ladakh VR experience",
      "tag":"Ladakh,india,vr,360,animals",
      "url":"https://www.youtube.com/embed/V6sw_JlqO2w"
   },
   {
      "name":" Reasons to Travel to Dubai - A 360° VR Experience",
      "tag":"Dubai,360,vr",
      "url":"https://www.youtube.com/embed/3-DmcL90Y_s"
   },
   {
      "name":"Elephants in Ziro",
      "tag":"Ziro,elephants,vr,360,animals",
      "url":"https://www.youtube.com/embed/LJcz9t0vqvw"
   },
   {
      "name":"Italy 360VR experience",
      "tag":"italy,vr,360",
      "url":"https://www.youtube.com/embed/i0qhK1Koz0U"
   }
];

  return function (dispatch) {
    return dispatch({
      type: types.GET_VIDEOS_SUCCESS,
      payload: videos
    });
  };
};
