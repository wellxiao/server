const Types = require("mongoose").SchemaTypes;
const Schema = require("mongoose").Schema;

module.exports = {
  type: "mongoose.internal",
  schema: new Schema({
    remote: {
      ip: { type: String, index: true },
      groupId: { type: Number, index: true },
      memberId: { type: Number, index: true },
      email: { type: String, index: true }
    },
    req: {
      route: String,
      url: String,
      method: String,
      body: Types.Mixed,
      params: Types.Mixed,
      query: Types.Mixed
    },
    res: { status: Number },
    timespan: Number,
    timestamp: {
      type: Date,
      default: Date.now,
      index: true
    },
    remarks: Types.Mixed
  })
    .index({
      "remote.memberId": 1,
      "req.route": 1,
      "req.method": 1,
      timestamp: -1
    })
    .index({
      "remote.memberId": 1,
      "req.route": 1,
      "req.method": 1,
      "res.status": 1,
      timestamp: -1
    })
};
