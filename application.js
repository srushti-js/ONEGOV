const mongoose = require("mongoose");

const userGovernmentProfileSchema = new mongoose.Schema(
  {
    nationalId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    identity: {
      fullName: {
        type: String,
        trim: true
      },
      dob: Date,
      gender: String,
      fatherName: String,
      address: String
    },

    income: {
      annualIncome: Number,
      incomeCategory: String,
      sourceOfIncome: String
    },

    education: [
      {
        degree: String,
        institution: String,
        passingYear: Number,
        gradeOrPercentage: String
      }
    ],

    health: {
      bloodGroup: String,
      disabilityStatus: {
        type: Boolean,
        default: false
      },
      healthInsuranceId: String
    },

    caste: {
      category: String,
      certificateNumber: String,
      issuedDate: Date
    },

    drivingLicense: {
      licenseNumber: String,
      vehicleTypes: [String],
      expiryDate: Date
    },

    land: [
      {
        surveyNumber: String,
        areaInAcres: Number,
        district: String,
        state: String
      }
    ],

    businessAndTax: {
      panNumber: String,
      gstin: String,
      businessName: String,
      taxFilingStatus: String
    },

    employment: {
      status: String,
      employerName: String,
      occupation: String
    },

    applicationStatus: [
      {
        applicationType: {
          type: String,
          enum: ["Scheme", "Scholarship", "Document", "Service"],
          required: true
        },
        title: {
          type: String,
          required: true
        },
        applicationNumber: {
          type: String,
          required: true
        },
        department: String,
        appliedDate: {
          type: Date,
          default: Date.now
        },
        currentStatus: {
          type: String,
          enum: [
            "Processing",
            "Approved",
            "Rejected",
            "Action Required"
          ],
          default: "Processing"
        },
        remarks: String
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "UserGovernmentProfile",
  userGovernmentProfileSchema,
  "usergovernmentprofiles"
);