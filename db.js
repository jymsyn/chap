"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionString = 'mongodb://jimson:1234@ds023495.mlab.com:23495/chap-app';
var mongoose = require("mongoose");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongoose.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sZ0JBQWdCLEdBQVUsd0RBQXdELENBQUM7QUFFekYsbUNBQXNDO0FBRXRDO0lBQUE7SUFVQSxDQUFDO0lBUGUsZ0JBQU8sR0FBckI7UUFBQSxpQkFNQztRQUxDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsRUFBRTtZQUNoRCxLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyJ9