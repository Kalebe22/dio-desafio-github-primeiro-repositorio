import React from "react";
import { Composition } from "remotion";
import { Reel } from "./Reel";
import { HEIGHT, WIDTH } from "./theme";
import { totalSeconds } from "./types";
import { videos } from "./videos";

// Cada vídeo gera duas composições: <id>30 e <id>60 (ex.: ClaudeCowork30)
export const RemotionRoot: React.FC = () => (
  <>
    {videos.flatMap((video) =>
      [30, 60].map((fps) => (
        <Composition
          key={`${video.id}${fps}`}
          id={`${video.id}${fps}`}
          component={Reel}
          defaultProps={{ videoId: video.id }}
          width={WIDTH}
          height={HEIGHT}
          fps={fps}
          durationInFrames={Math.round(totalSeconds(video) * fps)}
        />
      )),
    )}
  </>
);
