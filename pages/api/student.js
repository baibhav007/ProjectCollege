const connectDB = require('../../lib/db'); // ✅ Import DB connection
const Student = require('../../models/student'); // Adjust path if needed

module.exports = async (req, res) => {
  await connectDB(); // ✅ Ensure DB is connected before any operation

  if (req.method === 'POST') {
    const {
      name,
      fatherName,
      motherName,
      tenthPassYear,
      tenthPercentage,
      twelfthPassYear,
      twelfthPercentage,
      streamInTwelfth,
      college,
      mobile,
      address,
    } = req.body;

    const newStudent = new Student({
      name,
      fatherName,
      motherName,
      tenthPassYear,
      tenthPercentage,
      twelfthPassYear,
      twelfthPercentage,
      streamInTwelfth,
      college,
      mobile,
      address,
    });

    try {
      const savedStudent = await newStudent.save();
      res.status(201).json(savedStudent);
    } catch (err) {
      console.error('Insert error:', err);
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
