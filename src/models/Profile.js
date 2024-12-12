import { Schema, model, models } from "mongoose";

const profileSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    realState: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true
    },
    constructionDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        enum: ["villa", "apartment", "store", "office"],
        required: true,
    },
    amenities: {
        type: [String],
        default: []
    },
    amenities: {
        type: [String],
        default: []
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timeStamp: true
});

const Profile = models.Profile || model("Profile", profileSchema);

export default Profile;