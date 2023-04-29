const mongoose = require("mongoose");

//map global promise
mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://127.0.0.1:27017/customercli", {
    useNewUrlParser: true,
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log("bad error", err));


// Import model
const Customer = require("./models/customer");

// Add Customer
const addCustomer = (customer) => {
    Customer.create(customer).then((customer) => {
        console.info("New Customer Added ", customer);
    });
};

// Find Customer
const findCustomer = (name) => {
    const search = new RegExp(name, "i");
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] })
        .then((customer) => {
            console.log("Customer found");
            console.info(customer);
            console.info(`${customer.length} matches found`);
        })
        .catch((err) => {
            console.log("Error occurred hai: ", err);
        });
};

//Update Customer 
const updateCustomer = (_id, customer) => {
    Customer.updateOne({_id: _id}, customer).then(customerInfo => {
        console.info("Update Successful");
        console.log("customer info: ", customerInfo)
        //db.close();
    })
}

const removeCustomer = (_id) => {
    Customer.deleteOne({_id: _id}).then(deletedItem => {
        console.log("Deleted Successfully");
        // db.close();
    })
}

const listCustomer = () => {
    Customer.find().then(list => {
        console.info(list);
        console.info(`${list.length} customers found.`)
    }) 
}

module.exports = {
	addCustomer, findCustomer, updateCustomer, listCustomer, removeCustomer
}

