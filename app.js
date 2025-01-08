import ollama from "ollama";
import fs from "fs";

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
    const catagory = process.argv.slice(2)[0];
    let randomQuestionNo  = Math.floor(Math.random() * 3) + 1;
    console.log(catagory);
    console.log(randomQuestionNo);
    const readFilePath = `${questionsDirPath}/${catagory}/q${randomQuestionNo}.txt`;
    const content = fs.readFileSync(readFilePath);
    const ollamaResponse = await askToOllama(content.toString());
    const answerFilePath =`${answersDirPath}/${catagory}/a${randomQuestionNo}.txt`; 
    fs.writeFileSync(answerFilePath, ollamaResponse.message.content);
    console.log(`answer file created at ${answerFilePath}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
main();