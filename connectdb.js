const mongoose = require("mongoose");

(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/customercli");
        console.log("hi");
    } catch (e) {
        console.log("this is error:", e);
    }
})();