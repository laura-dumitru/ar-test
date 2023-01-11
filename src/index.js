import { DeepAR } from "deepar";
import deeparWasm from "deepar/wasm/deepar.wasm";
import faceTrackingModel from "deepar/models/face/models-68-extreme.bin";
import segmentationModel from "deepar/models/segmentation/segmentation-160x160-opt.bin";

const canvas = document.getElementById("deepar-canvas");
const deepAR = new DeepAR({
  licenseKey:
    "a9988ad83ca0edffc2dd99a29939a77a44d01eef90ecd89431044f078eabe770e574e24d53226433",
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
