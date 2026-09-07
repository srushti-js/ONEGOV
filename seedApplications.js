const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const GovernmentApplication = require("./governmentApplication");
const mockData = require("./governmentApplications.json");

const seedApplications = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await GovernmentApplication.deleteMany({});

        await GovernmentApplication.insertMany(mockData);

        console.log("Application mock data added to MongoDB Atlas successfully");

        await mongoose.disconnect();
    } catch (error) {
        console.error("Application seed error:", error.message);
        process.exit(1);
    }
};

seedApplications();