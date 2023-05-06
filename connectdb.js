const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/students");
    } catch (e) {
        console.log("this is error:", e);
    }
})();