//dependencies //straight from docs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");


//creates schema
const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        maxlength: 15,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    inventory: [
        {
            id: {
                type: Schema.Types.ObjectId,
                ref: "Item"
            },
            amount: Number,
            // default:[]
        }
    ],
    portfolio: [
        {
            type: Schema.Types.ObjectId,
            ref: "Painting",
            // default: []

        }
    ],
    hungry: {
        type: Boolean,
        default: false
    },
    sleepy: {
        type: Boolean,
        default: false
    },
    coins: {
        type: Number,
        default: 10
    },
    avatarSRC: {
        type: String,
        default: ""
    }
});

// Execute before each user.save() call
UserSchema.pre("save", function (callback) {
    let user = this;

    // Break out if the password hasn't changed
    if (!user.isModified("password")) return callback();

    // Password changed so we need to hash it
    bcrypt.genSalt(5, function (err, salt) {
        if (err) return callback(err);

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return callback(err);
            user.password = hash;
            callback();
        });
    });
});

UserSchema.methods.verifyPassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = User;