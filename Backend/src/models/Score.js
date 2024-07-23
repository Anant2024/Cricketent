

import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema({
  team1: {
    type: String,
    required: true
  },
  team2: {
    type: String,
    required: true
  },
  totalOvers: {
    type: Number,
    required: true
  },
  team1Score: {
    type: Number,
    required: true
  },
  team2Score: {
    type: Number,
    required: true
  },
 eventOver: [[]]
});
//vEHTlijSKQVviLSh
//anantbhardwaj8115
//
export const Score = mongoose.model("Score", scoreSchema);
