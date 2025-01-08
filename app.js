import ollama from "ollama";
import fs from "fs/promises";

async function askToOllama(content) {
  try {
    const response = await ollama.chat({
      model: 'llama3.2',
      messages: [{ role: 'user', content: content }],
    });
    return response;
  } catch (error) {
    throw new Error(`Error with Ollama: ${error.message}`);
  }
}

async function main() {
  try {
    const content = await fs.readFile("./questions/q1.txt");
    const ollamaResponse = await askToOllama(content.toString());
    await fs.writeFile("answers/a.txt", ollamaResponse.message.content);
    console.log(`answer file created`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();