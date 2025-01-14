// controllers/applicationController.js
const Application = require('../models/Application');

const applicationController = {
    submit: async (req, res) => {
        try {
            console.log('Received data in controller:', req.body);

            // Validate required fields
            const { firstName, lastName, emailAddress } = req.body;
            if (!firstName || !lastName || !emailAddress) {
                return res.status(400).json({
                    success: false,
                    message: 'Required fields are missing'
                });
            }

            // Create new application
            const newApplication = new Application(req.body);
            const savedApplication = await newApplication.save();

            console.log('Saved application:', savedApplication);

            return res.status(201).json({
                success: true,
                message: 'Application submitted successfully',
                data: savedApplication
            });
        } catch (error) {
            console.error('Controller error:', error);
            return res.status(500).json({
                success: false,
                message: 'Error submitting application',
                error: error.message
            });
        }
    }
};

module.exports = applicationController;