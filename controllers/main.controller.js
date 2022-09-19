// @desc    test
// @route   get /test
exports.test = (req, res) =>{ 

    try {

        res.json('test end point success.')

    } catch (error) {

        res.status(400).json('Error: ' + error)

    }
  
  } 

