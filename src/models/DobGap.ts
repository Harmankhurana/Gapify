import { Schema, model, Document, Types } from 'mongoose';

interface Gap {
  years: number;
  months: number;
  days: number;
}

export interface IDobGap extends Document {
  userId: Types.ObjectId;
  p1Name: string;
  p1Dob: string;
  p2Name: string;
  p2Dob: string;
  elder: string;
  younger: string;
  gap: Gap;
}

const dobGapSchema = new Schema<IDobGap>(
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
    p1Dob: { 
        type: String, 
        required: true 
    },
    p2Name: { 
        type: String, 
        required: true 
    },
    p2Dob: { 
        type: String, 
        required: true 
    },
    elder: { 
        type: String, 
        required: true 
    },
    younger: { 
        type: String, 
        required: true 
    },
    gap: {
      years: { 
        type: Number, 
        required: true 
    },
      months: { 
        type: Number, 
        required: true 
    },
      days: { 
        type: Number, 
        required: true 
    },
    },
  },
  { timestamps: true }
);

export default model<IDobGap>('DobGap', dobGapSchema);