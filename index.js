const inject = require('light-my-request');

const dispatch = function (req, res) {
  const reply = 'Hello World';
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length });
  res.end(reply);
};

(async () => {
  for (let i = 0; i < 1e5; i++) await inject(dispatch, { method: 'get', url: '/' });
})();
