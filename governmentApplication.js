const mongoose = require("mongoose");

const governmentApplicationSchema = new mongoose.Schema(
  {
    applicationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    nationalId: {
      type: String,
      required: true,
      trim: true
    },

    serviceType: {
      type: String,
      enum: [
        "Scholarship & Education",
        "Document & Certificate",
        "Citizen Welfare & Pension",
        "Utility & Citizen Services"
      ],
      required: true
    },

    serviceName: {
      type: String,
      required: true,
      trim: true
    },

    department: {
      type: String,
      required: true,
      trim: true
    },

    applicationDate: {
      type: Date,
      default: Date.now
    },

    status: {
      type: String,
      enum: [
        "Submitted",
        "Verification",
        "Processing",
        "Approved",
        "Rejected",
        "Action Required"
      ],
      default: "Submitted"
    },

    remarks: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "GovernmentApplication",
  governmentApplicationSchema,
  "applications"
);