import LoanRequest from "../models/loanRequest.js";

export const getAllApplications = async (req, res) => {
    try {
        const applications = await LoanRequest.find({}).populate('user', 'name email cnic');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, appointmentDate, appointmentTime, location } = req.body;

        const application = await LoanRequest.findById(id);

        if (application) {
            application.status = status || application.status;
            if (appointmentDate) application.appointment.date = appointmentDate;
            if (appointmentTime) application.appointment.time = appointmentTime;
            if (location) application.appointment.location = location;

            const updatedApp = await application.save();
            res.status(200).json(updatedApp);
        } else {
            res.status(404).json({ message: "Application not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};