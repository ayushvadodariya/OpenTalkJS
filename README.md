
# 🌟 JS-Based Personal LLM 🌟

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository
1. Open your terminal or command prompt 🖥️.
2. Clone the repository using the command 🔗:
   ```bash
   git clone https://github.com/ayushvadodariya/OpenTalkJS
   ```
3. Navigate into the cloned repository 📂:
   ```bash
   cd OpenTalkJS
   ```
4. Open the project in your favorite editor ✍️.

---

### 2️⃣ Edit the Script
Modify the `main.js` file to customize your LLM interactions 📝. Here's an example:
   ```javascript
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

   ```

---

### 3️⃣ Install Dependencies
1. Check your Node.js version 🛠️:
   ```bash
   node -v
   ```
2. Install the `ollama` library 📦:
   ```bash
   npm install ollama
   ```
3. Verify the installed `ollama` version 🔍:
   ```bash
   ollama --version
   ```

---

### 4️⃣ Run the Application
1. Execute the script 🚦:
   ```bash
   node script.js
   ```
2. 🎉 **View the Output**  
   Your personal LLM will respond to queries like generating a marketing email or answering questions about the UK's capital!

---

Enjoy building and experimenting with your JS-based Personal LLM! 🌈