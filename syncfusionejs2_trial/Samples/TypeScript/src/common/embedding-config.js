import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2';

env.localModelPath = "./";
// Disable the loading of remote models from the Hugging Face Hub:
env.allowRemoteModels = false;

let pipe = null;

async function initializePipeline() {
  pipe = await pipeline("feature-extraction", "models");
  return pipe;
}

window.embeddingModel = async function (description) {
  if (!pipe) {
    pipe = await initializePipeline();
  }
  // Generate the embedding from text
  const output = await pipe(description, {
    pooling: "mean",
    normalize: true,
  });
  // Extract the embedding output
  const embedding = Array.from(output.data);
  return embedding;
};
