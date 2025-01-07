import ollama from "ollama";

(async ()=>{
  try{
    const response = await ollama.chat({
      model: 'moondream:latest',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    })
    console.log(response.message.content)
  }catch(error){
    console.error("Error occurred:", error.message);
  }
})()

