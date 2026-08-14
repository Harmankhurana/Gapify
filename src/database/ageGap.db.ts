import mongoose, {model, Schema, SchemaType} from "mongoose";

const personOneSchema = new Schema({
    personOneName: {
        type: String,
        required: true
    },
    personOneAge: {
        type: Number,
        required: true
    }
});

const personTwoSchema = new Schema({
    personTwoName: {
        type: String,
        required: true
    },
    personTwoAge: {
        type: Number,
        required: true
    }
});

const PersonOneModel = model('PersonOne', personOneSchema);
const PersonTwoModel = model('PersonTwo', personTwoSchema);

export {
    PersonOneModel,
    PersonTwoModel
}
