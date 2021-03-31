const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
app.use(cors());

const io = require("socket.io")(http);

io.on("connection", (socket) => {
  socket.on("message", ({ data }) => {
    io.emit("message", { data });
  });
});

app.get("/", (req, res) => res.status(200).send("backend testing"));

const port = process.env.PORT || 4000;

http.listen(port, () => {
  console.log("listening on *:", port);
});
