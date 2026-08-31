import { Composition } from "remotion";
import { MyComponent } from "./Composition";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComponent}
        durationInFrames={150}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          clips: [
            {
              src: "https://videos.pexels.com/video-files/6961974/6961974-hd_1280_720_25fps.mp4",
              start: 0,
              length: 5,
            },
          ],
          audioUrl: "",
        }}
      />
    </>
  );
};