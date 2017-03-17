const connectionString:string = 'mongodb://jimson:1234@ds023495.mlab.com:23495/chap-app';

import mongoose = require('mongoose');

export default class Database {
  public static db:mongoose.Db;
  
  public static connect() {
    return mongoose.connect(connectionString).then((db) => {
      this.db = db;
    }).catch((err) => {
      console.error(err);
    });
  }
}