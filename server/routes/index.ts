import { Router } from "express";
const router = Router();

router.get("/tasks", (req, res) => {
    res.send("Getting tasks!");
})

router.post("/tasks", (req, res) => {
    res.send("Creating tasks");
})

router.get("/tasks/:id", (req, res) => {
    res.send("Getting ONE task!");
})

router.delete("/tasks/:id", (req, res) => {
    res.send("Deleting ONE task");
})

router.put("/tasks/:id", (req, res) => {
    res.send("Updating ONE task");
})

export default router;