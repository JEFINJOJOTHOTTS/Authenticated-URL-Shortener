import mongoose from 'mongoose';
import { nanoid } from 'nanoid'
const urlSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        urls: [
            {
                url: {
                    type: String,
                    required: true,
                },
                miniUrl: {
                    type: String,
                    required: true,
                    default: nanoid(),
                },
            },
        ],
    },
    {
        toJSON: {
            transform(doc, ret) {
                delete ret._id;
                delete ret.__v;
            },
        },
    },
);

const Url = mongoose.model('url', urlSchema);
export { Url as urlModel };
