import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface IPost extends Document {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComment extends Document {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const UserSchema: Schema = new Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
});

const PostSchema: Schema = new Schema({
    userId: { type: Number, required: true },
    id: { type: Number, unique: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
});

const CommentSchema: Schema = new Schema({
    postId: { type: Number, required: true },
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    body: { type: String, required: true },
});

export const User = mongoose.model<IUser>("User", UserSchema);
export const Post = mongoose.model<IPost>("Post", PostSchema);
export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
