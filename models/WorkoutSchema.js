const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        require: "What type of exercise is this?!?!?!"
      },
      name: {
        type: String,
        required: "Your exercise needs a name. Dummy"
      },
      duration: {
        type: Number,
        required: "How long was it?!?!"
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

WorkoutSchema.set('toJSON', { virtuals: true });
WorkoutSchema.virtual("totalDuration")
.get(function() { return this.exercises.reduce((total, exercise) => {return total + exercise.duration}, 0)})

const Workout = mongoose.model("workout", WorkoutSchema);

module.exports = Workout;
