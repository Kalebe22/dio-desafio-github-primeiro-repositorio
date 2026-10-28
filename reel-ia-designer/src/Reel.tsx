import React, { useEffect, useState } from "react";
import { AbsoluteFill, continueRender, delayRender, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "./components/Background";
import { ProgressBar } from "./components/ProgressBar";
import { SceneView } from "./components/SceneView";
import { scenes } from "./script";
import { colors } from "./theme";

/** Converte o roteiro (segundos) em [início, duração] em frames para o fps atual. */
export const timeline = (fps: number) => {
  let acc = 0;
  return scenes.map((scene) => {
    const from = Math.round(acc * fps);
    acc += scene.duration;
    return { scene, from, duration: Math.round(acc * fps) - from };
  });
};

export const Reel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [handle] = useState(() => delayRender("Carregando fontes"));

  // Garante que as fontes estejam carregadas antes do primeiro frame ser capturado
  useEffect(() => {
    Promise.all([
      document.fonts.load("900 100px Montserrat"),
      document.fonts.load("700 100px Montserrat"),
      document.fonts.load("600 100px Inter"),
    ]).then(() => continueRender(handle));
  }, [handle]);

  const items = timeline(fps);
  const current = [...items].reverse().find((i) => frame >= i.from) ?? items[0];

  return (
    <AbsoluteFill style={{ background: colors.bg }}>
      <Background
        accent={colors[current.scene.accent]}
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
  );
};
