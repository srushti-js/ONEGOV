const mongoose = require("mongoose");

const consentSchema = new mongoose.Schema(
  {
    nationalId: {
      type: String,
      required: true,
      trim: true
    },

    serviceType: {
      type: String,
      required: true,
      trim: true
    },

    serviceName: {
      type: String,
      required: true,
      trim: true
    },

    dataAccess: {
      identity: {
        type: Boolean,
        default: false
      },

      income: {
        type: Boolean,
        default: false
      },

      education: {
        type: Boolean,
        default: false
      },

      health: {
        type: Boolean,
        default: false
      },

      caste: {
        type: Boolean,
        default: false
      },

      drivingLicense: {
        type: Boolean,
        default: false
      },

      land: {
        type: Boolean,
        default: false
      },

      businessAndTax: {
        type: Boolean,
        default: false
      },

      employment: {
        type: Boolean,
        default: false
      }
    },

    status: {
      type: String,
      enum: ["Active", "Revoked"],
      default: "Active"
    },

    consentDate: {
      type: Date,
      default: Date.now
    },

    revokedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Consent",
  consentSchema,
  "consents"
);