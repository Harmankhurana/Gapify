import { Schema, model, Document, Types } from 'mongoose';

export interface IAgeComparison extends Document {
  userId: Types.ObjectId;
  p1Name: string;
  p1Age: number;
  p2Name: string;
  p2Age: number;
  elder: string;
}

const ageComparisonSchema = new Schema<IAgeComparison>(
  {
    userId: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    p1Name: { 
        type: String, 
        required: true 
    },
    p1Age: { 
        type: Number, 
        required: true 
    },
    p2Name: { 
        type: String, 
        required: true 
    },
    p2Age: { 
        type: Number, 
        required: true 
    },
    elder: { 
        type: String, 
        required: true 
    },
  },
  { timestamps: true }
);

export default model<IAgeComparison>('AgeComparison', ageComparisonSchema);