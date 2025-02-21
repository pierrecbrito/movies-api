import {model, Schema} from 'mongoose';

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  genres: {
    type: [String],
    required: true
  },
  director: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  }
 }, {
    timestamps: true
  }
);

export const MovieModel = model('Movie', movieSchema);