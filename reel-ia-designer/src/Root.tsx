import React from "react";
import { Composition } from "remotion";
import { Reel } from "./Reel";
import { totalSeconds } from "./script";
import { HEIGHT, WIDTH } from "./theme";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="ReelIA30"
      component={Reel}
      width={WIDTH}
      height={HEIGHT}
      fps={30}
      durationInFrames={Math.round(totalSeconds * 30)}
    />
    <Composition
      id="ReelIA60"
      component={Reel}
      width={WIDTH}
      height={HEIGHT}
      fps={60}
      durationInFrames={Math.round(totalSeconds * 60)}
    />
  </>
);
