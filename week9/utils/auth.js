const jwt = require('jsonwebtoken');

const signToken = data => {
  const token = jwt.sign( 
    data, 
    'secretData', 
    { expiresIn: '1h' }
  );
  return token;
};

const verifyToken = token => {
  const data = jwt.verify(token, 'secretData');
  return data;
};

module.exports = { 
  signToken, 
  verifyToken 
};