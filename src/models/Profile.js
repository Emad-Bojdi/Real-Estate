import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  realState: {
    type: String,
    required: true
  },
  constructionDate: {
    type: Date,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ["apartment", "villa", "store", "office"]
  },
  amenities: {
    type: [String],
    default: []
  },
  rules: {
    type: [String],
    default: []
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  published: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Profile = mongoose.models?.Profile || mongoose.model("Profile", profileSchema);
export default Profile;