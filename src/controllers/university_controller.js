exports.index = function (request, response) {
  University.findAll()
    .then(data => {
      response.status(200).send(data);
    })
    .catch(error =>
      response.status(500).send({message: error.message || 'Some error occurred'}));
};

exports.show = function (request, response) {
  response.send('/GET');
};

exports.create = function (request, response) {
  response.send('/POST');
};

exports.update = function (request, response) {
  response.send('/PUT');
};

exports.delete = function (request, response) {
  response.send('/DELETE');
};

