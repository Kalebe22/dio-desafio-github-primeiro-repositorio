import { Config } from "@remotion/cli/config";

// Saída otimizada para Reels/Shorts/TikTok: H.264 + yuv420p (compatível com todos os apps)
Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(95);
Config.setCodec("h264");
Config.setCrf(16);
Config.setPixelFormat("yuv420p");
Config.setOverwriteOutput(true);
Config.setConcurrency(null); // usa metade dos núcleos da CPU

// Se o Remotion não conseguir baixar o Chrome headless, aponte para um Chromium local:
// REMOTION_BROWSER=/caminho/para/chromium npm run render
if (process.env.REMOTION_BROWSER) {
  Config.setBrowserExecutable(process.env.REMOTION_BROWSER);
}
