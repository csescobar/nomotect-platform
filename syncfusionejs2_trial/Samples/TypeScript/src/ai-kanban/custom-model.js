import { AzureOpenAI } from "https://cdn.jsdelivr.net/npm/openai@4.56.0/+esm";

// Replace your Azure OpenAI endpoint, apiVersion, deployment and API key here
const endpoint = "AZURE_OPENAI_ENDPOINT";
const apiKey = "AZURE_OPENAI_API_KEY";
const deployment = "DEPLOYMENT_NAME";
const apiVersion = "API_VERSION";

const openAi = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    deployment,
    dangerouslyAllowBrowser: true
});

window.OpenAiModel =  async function (promptQuery){
    const chatCompletion = await getOpenAiModel(promptQuery);
    return chatCompletion.choices[0].message.content;
}

window.getOpenAiModel = async function (promptQuery) {
    return await openAi.chat.completions.create({
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { 
                role: "user", 
                content: `${promptQuery}`
            }
        ],
        model: "gpt-4",
    });
}


