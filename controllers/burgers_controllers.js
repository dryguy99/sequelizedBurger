var orm = require("./config/orm.js");


var access = function () {
	// insert a burger into the db
	orm.insertOne("party_name", "parties", "party_cost", "DESC", callBack);

	// update one burger in db
	orm.updateOne("parties", "client_id", "2", callBack);

	// select all burgers
	orm.selectAll("*", "burgers", callBack);
}

module.exports = access;