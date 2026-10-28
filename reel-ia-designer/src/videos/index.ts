import type { Video } from "../types";
import { claudeCowork } from "./claude-cowork";
import { iaDesigner } from "./ia-designer";

/** Registre aqui cada novo roteiro: vira as composições <id>30 e <id>60. */
export const videos: Video[] = [iaDesigner, claudeCowork];

export const getVideo = (id: string) => {
  const v = videos.find((x) => x.id === id);
  if (!v) throw new Error(`Vídeo não encontrado: ${id}`);
  return v;
};
