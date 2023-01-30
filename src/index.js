import { DeepAR } from "deepar";
import deeparWasm from "deepar/wasm/deepar.wasm";
import faceTrackingModel from "deepar/models/face/models-68-extreme.bin";
import segmentationModel from "deepar/models/segmentation/segmentation-160x160-opt.bin";
import "./styles.css";
import * as dotenv from "dotenv";
dotenv.config();

const canvas = document.getElementById("deepar-canvas");
const deepAR = new DeepAR({
  licenseKey: process.env.DEEP_AR_KEY,
  canvas: canvas,
  deeparWasmPath: deeparWasm,
  callbacks: {
    onInitialize: () => {
      deepAR.startVideo(true);
    },
  },
  segmentationConfig: {
    modelPath: segmentationModel,
  },
});

deepAR.downloadFaceTrackingModel(faceTrackingModel);

const effects = [
  "./effects/8bitHearts.deepar",
  "./effects/burning_effect.deepar",
  "./effects/Elephant_Trunk.deepar",
  "./effects/Emotion_Meter.deepar",
  "./effects/Emotions_Exaggerator.deepar",
  "./effects/Fire_Effect.deepar",
  "./effects/flower_face.deepar",
  "./effects/galaxy_background.deepar",
  "./effects/Hope.deepar",
  "./effects/Humanoid.deepar",
  "./effects/MakeupLook.deepar",
  "./effects/Neon_Devil_Horns.deepar",
  "./effects/Ping_Pong.deepar",
  "./effects/Snail.deepar",
  "./effects/Split_View_Look.deepar",
  "./effects/Stallone.deepar",
  "./effects/Vendetta_Mask.deepar",
  "./effects/viking_helmet.deepar",
];

let currentEffectIdx = -1;
const btn = document.getElementById("button");
btn.addEventListener("click", () => {
  currentEffectIdx = (currentEffectIdx + 1) % effects.length;
  const effect = effects[currentEffectIdx];
  deepAR.switchEffect(0, "slot", effect);
});
