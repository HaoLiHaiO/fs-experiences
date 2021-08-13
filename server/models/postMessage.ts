import mongoose, { Schema } from 'mongoose'

interface Post {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount: { type: number, default: number },
    createdAt: { type: Date, default: Date }
}

const postSchema = new Schema<Post>({
    title: { type: String, required: true },
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});