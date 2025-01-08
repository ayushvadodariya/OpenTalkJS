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
    const questionsDirPath = "./questions";
    const answersDirPath = "./answers";
    const questionsFileNameList = await fs.readdir(questionsDirPath);
    questionsFileNameList.forEach(async(fileName)=>{
      const content = await fs.readFile(`${questionsDirPath}/${fileName}`);
      const ollamaResponse = await askToOllama(content.toString());
      const answerFileName = `${answersDirPath}/${fileName.replace("q","a")}`;
      await fs.writeFile(answerFileName, ollamaResponse.message.content);
      console.log(`answer file created at ${answerFileName}`);
    })
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();