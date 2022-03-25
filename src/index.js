const ws = require("nodejs-websocket");
const PORT = 8000;

const server = ws.createServer((conn) => {
  console.log("链接成功");

  // 接收传递过来的信息
  conn.on("text", (data) => {
    console.log('Connection success', data);
    setTimeout(() => {
      // 发送信息
      conn.sendText(data);
    }, 3000);
  });

  // 关闭连接
  conn.on("close", () => {
    console.log("Connection closed");
  });

  conn.on("error", () => {
    console.log("Connection error");
  });
}).listen(PORT, () => {
    console.log("Listne PROT", PORT);
});
