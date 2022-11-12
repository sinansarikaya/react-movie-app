import { VideoStyle } from "./VideoSection.styled";

const VideoSection = ({ videoKey }) => {
  return (
    <VideoStyle>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video"
      />
    </VideoStyle>
  );
};

export default VideoSection;
