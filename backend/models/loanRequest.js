import mongoose from "mongoose";

const loanRequestSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Wedding Loans', 'Home Construction Loans', 'Business Startup Loans', 'Education Loans']
    },
    subcategory: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    loanPeriod: {
        type: Number,
        required: true
    },
    guarantors: [
        {
            name: String,
            email: String,
            location: String,
            cnic: String
        }
    ],
    personalInfo: {
        address: { type: String, required: true },
        phone: { type: String, required: true }
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    appointment: {
        date: Date,
        time: String,
        location: { type: String, default: "Saylani Head Office" },
        tokenNumber: String
    }
}, { timestamps: true });

const LoanRequest = mongoose.model("LoanRequest", loanRequestSchema);
export default LoanRequest;