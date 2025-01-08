import ollama from "ollama";
import fs from "fs";

function readFile(filePath){
    return new Promise((resolve, reject)=>{
      fs.readFile(filePath,(err,data)=>{
        if(err) reject(err.message);
        resolve(data.toString());
      })
    })
}

function createAndWriteFile(filePath, content){
  return new Promise((resolve, reject)=>{
    fs.writeFileSync(filePath,content,(err)=>{
      if(err) reject(err.message);
      resolve();
    });
  })
}

async function askToOllama(content){
  try{
    const response = await ollama.chat({
      model: 'llama3.2',
      messages: [{ role: 'user',content:content}],
    })
    return response;
  }catch(error){
    console.error("Error occurred:", error.message);
  }
}

 async function main(){
  const content =  await readFile("./questions/q.txt");
  const ollamaResponse = await askToOllama(content);
  await createAndWriteFile("answers/a.txt", ollamaResponse.message.content);
}
main();