import { Request, Response } from "express";
import axios from "axios";
import { User, Post, Comment } from "./models";

// Load 10 users from JSON Placeholder and store them
export const loadUsers = async (req: Request, res: Response) => {
    try {
        const users = await axios.get("https://jsonplaceholder.typicode.com/users");
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const comments = await axios.get("https://jsonplaceholder.typicode.com/comments");

        await User.insertMany(users.data);
        await Post.insertMany(posts.data);
        await Comment.insertMany(comments.data);

        return res.status(200).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to load data" });
    }
};

// Delete all users
export const deleteAllUsers = async (req: Request, res: Response) => {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
    return res.status(200).json({ message: "All users deleted" });
};

// Delete specific user
export const deleteUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    const user = await User.findOneAndDelete({ id: userId });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    await Post.deleteMany({ userId });
    await Comment.deleteMany({ postId: { $in: userId } });
    return res.status(200).json({ message: "User deleted successfully" });
};

// Get user with posts and comments
export const getUser = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId);
    const user = await User.findOne({ id: userId });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    const posts = await Post.find({ userId });
    const comments = await Comment.find({ postId: { $in: posts.map((p) => p.id) } });

    return res.json({ user, posts, comments });
};

// Add a new user
export const addUser = async (req: Request, res: Response) => {
    const { id, name, username, email } = req.body;

    if (await User.findOne({ id })) {
        return res.status(400).json({ error: "User with this ID already exists" });
    }

    const newUser = new User({ id, name, username, email });
    await newUser.save();

    return res.status(201).json({ message: "User added successfully", user: newUser });
};
