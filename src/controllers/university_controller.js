exports.index = async function (request, response) {
  try {
    universities = await University.findAll();
    
    return response.status(200).send(universities);
  } catch(error){
    return response.status(400).send({
      message: error.message
      || 'Some error occurred'
    });
  }
};

exports.show = async function (request, response) {
  try {
    university = await University.findByPk(request.params.id);
    
    return response.status(200).send(university);
  } catch(error){
    return response.status(400).send({
      message: error.message
      || 'Some error occurred'
    });
  }
};

exports.create = async function (request, response) {
  try {
    university = await University.create(request.body);
    
    return response.status(200).send(university);
  } catch(errors){
    return response.status(400).send({
      message: errors.errors.map((error) => error.message) 
      || 'Some error occurred'
    });
  }
};

exports.update = async function (request, response) {
  try {
    university = await University.findByPk(request.params.id);

    university.update(request.body);
    
    return response.status(200).send(university);
  } catch(errors){
    return response.status(400).send({
      message: errors.errors.map((error)=> error.message) 
      || 'Some error occurred'
    });
  }
};

exports.delete = async function (request, response) {
  try {
    university = await University.findByPk(request.params.id);

    university.destroy();

    return response.status(200).send(request.json());
  } catch(error){
    return response.status(400).send({
      message: error.message
      || 'Some error occurred'
    });
  }
};
