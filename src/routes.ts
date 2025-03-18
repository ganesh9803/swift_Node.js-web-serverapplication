const express = require("express");
import {
    loadUsers,
    deleteAllUsers,
    deleteUser,
    getUser,
    addUser,
} from "./controllers";

const router = express.Router();

router.get("/load", loadUsers);
router.delete("/users", deleteAllUsers);
router.delete("/users/:userId", deleteUser);
router.get("/users/:userId", getUser);
router.put("/users", addUser);

export default router;
