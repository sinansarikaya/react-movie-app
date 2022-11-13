import { VideoStyle } from "./VideoSection.styled";

const VideoSection = ({ videoKey }) => {
  return (
    <VideoStyle>
      <iframe
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=0&mute=0`}
        title="YouTube video player"
        Frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
        AllowFullscreen
      />
    </VideoStyle>
  );
};

export default VideoSection;
