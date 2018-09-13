let i = 0;

const connectToServer = (req, res) => {
  i++;
  res.end(i.toString()); // only string of Buffer
};

module.exports = connectToServer;
