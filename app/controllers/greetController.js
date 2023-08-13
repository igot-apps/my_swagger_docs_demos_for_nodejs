const { v4: uuidv4 } = require('uuid');

exports.greet = (req, res) => {
  // Check for Bearer token in the request header
  const token = req.header('Authorization');
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Bearer token missing or invalid' });
  }

  // Extract and verify the token
  const authToken = token.split(' ')[1];
  
  // Simulate authentication/validation logic
  if (authToken !== '7c612f1e-23a9-43f4-b5ed-0c02eb3a3d5f') {
    return res.status(403).json({ error: 'Forbidden', message: 'Authentication failed - Invalid token' });
  }


  // Controller logic for /greet/:name
  res.json({ message: 'Authenticated welldone', token: authToken });
  
};
