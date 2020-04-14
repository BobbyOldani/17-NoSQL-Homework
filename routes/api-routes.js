const router = require("express").Router();
const Workout = require("../models/WorkoutSchema.js");

router.post("/api/workouts", ({ body }, res) => {
Workout.create({})
.then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout);
})
.catch(err => {
    res.status(400).json(err);
})
});


router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.put("/api/workouts/:id", function({ body, params }, res) {
    console.log(params.id, body)
Workout.findOneAndUpdate({_id: params.id}, { $push: {"exercises": body}}, {new: true})
.then(dbWorkout => {
    console.log(dbWorkout);
    res.json(dbWorkout)
})
.catch(err => {
    res.status(400).json(err);
});
});

module.exports = router