const randomNumberJSON = (max = 1) => {
  let maxNumber = Number(max);
  maxNumber = !max ? 1 : max;
  maxNumber = max < 1 ? 1 : max;

  const number = Math.random() * maxNumber;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(randomNumberJSON(params.max));
  response.end();
};

module.exports = {
  getRandomNumberResponse,
};
