// index.js
import app from "./server.js"; // ya "./Back-End/server.js" agar server.js kisi folder ke andar hai

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
