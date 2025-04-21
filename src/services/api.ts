import {Video} from "../types";

export const fetchVideos = async (): Promise<Video[]> => {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};
