const Destination = require('../models/destination');

exports.getRandomDestination = async (req, res) => {
  try {
    const destinations = await Destination.aggregate([{ $sample: { size: 1 } }]);
    console.log('Fetched Destinations:', destinations); // Add this line
    if (!destinations.length) {
      return res.status(404).json({ message: 'No destinations found' });
    }
    const destination = destinations[0];
    const options = await Destination.find().select('city -_id');
    res.json({
      clues: destination.clues.slice(0, 2),
      options: options.map(option => option.city),
      answer: destination.city,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination', error });
  }
};
