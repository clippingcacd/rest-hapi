'use strict';

var mongoose = require("mongoose");

module.exports = function () {

  var Types = mongoose.Schema.Types;

  var Model = {
    Schema: {
      enabled: {
        type: Types.Boolean,
        default: true
      }
    },
    modelName: "user_permission"
  };

  return Model;
};