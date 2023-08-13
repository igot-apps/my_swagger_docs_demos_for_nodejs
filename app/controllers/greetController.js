// greetController.js
exports.greet = (req, res) => {
    const { name } = req.params; // Extract the name parameter from the URL
  
  
    // Send the received data (name) as the response
    res.status(200).json({ receivedData: name });
  };