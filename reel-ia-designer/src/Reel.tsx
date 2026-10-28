import React, { useEffect, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "./components/Background";
import { ProgressBar } from "./components/ProgressBar";
import { SceneView } from "./components/SceneView";
import { PaletteContext } from "./theme";
import type { Video } from "./types";
import { getVideo } from "./videos";

/** Converte o roteiro (segundos) em [início, duração] em frames para o fps atual. */
export const timeline = (video: Video, fps: number) => {
  let acc = 0;
  return video.scenes.map((scene) => {
    const from = Math.round(acc * fps);
    acc += scene.duration;
    return { scene, from, duration: Math.round(acc * fps) - from };
  });
};

export type ReelProps = { videoId: string };

export const Reel: React.FC<ReelProps> = ({ videoId }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const video = getVideo(videoId);
  const { palette } = video;
  const [handle] = useState(() => delayRender("Carregando fontes"));

  // Garante que as fontes estejam carregadas antes do primeiro frame ser capturado
  useEffect(() => {
    const { display, body, displayWeight, boldWeight } = palette.fonts;
    Promise.all([
      document.fonts.load(`${displayWeight} 100px "${display}"`),
      document.fonts.load(`${boldWeight} 100px "${display}"`),
      document.fonts.load(`600 100px "${body}"`),
    ]).then(() => continueRender(handle));
  }, [handle, palette]);

  const items = timeline(video, fps);
  const current = [...items].reverse().find((i) => frame >= i.from) ?? items[0];

  return (
    <PaletteContext.Provider value={palette}>
      <AbsoluteFill style={{ background: palette.bg }}>
        <Background
          accent={palette[current.scene.accent]}
          sceneFrame={frame - current.from}
          sceneStarts={items.map((i) => i.from)}
        />
        {items.map(({ scene, from, duration }) => (
          <Sequence key={scene.id} from={from} durationInFrames={duration} name={scene.id}>
            <SceneView scene={scene} frame={frame - from} fps={fps} durationInFrames={duration} />
          </Sequence>
        ))}
        <ProgressBar sceneStarts={items.map((i) => i.from)} />
      </AbsoluteFill>
    </PaletteContext.Provider>
  );
};
