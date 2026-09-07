const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const UserGovernmentProfile = require("./application");
const mockData = require("./mockData.json");

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await UserGovernmentProfile.deleteMany({});

        await UserGovernmentProfile.insertMany(mockData);

        console.log("Mock data added to MongoDB Atlas successfully");

        await mongoose.disconnect();
    } catch (error) {
        console.error("Seed error:", error.message);
        process.exit(1);
    }
};

seedDatabase();