'use strict'

const mongoose = require('mongoose');
const keys = require('../../bin/keys');

module.exports.connect = async () => {
  await mongoose.connect(keys.mongoconnect, err => {
    if(err) {
      console.log('====================================');
      console.log('A base de dados não está ativada.');
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('Conexão como mongo realizada!');
      console.log('====================================');
    }
  }, { useNewUrlParser: true });
}