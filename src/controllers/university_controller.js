exports.index = function (req, res) {
  res.send('/GET');
};

exports.show = function (req, res) {
  res.send('/GET');
};

exports.create = function (req, res) {
  res.send('/POST');
};

exports.update = function (req, res) {
  res.send('/PUT');
};

exports.delete = function (req, res) {
  res.send('/DELETE');
};

