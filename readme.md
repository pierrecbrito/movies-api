# Movie API

## Description
This is a RESTful API built with **Express.js** and **TypeScript**, using **MongoDB** as the database. The API allows users to create, retrieve, update, and delete movie records.

## Technologies Used
- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Mongoose** (for MongoDB object modeling)
- **Express Validator** (for request validation)

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your-repository.git
   cd your-repository
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure your MongoDB connection:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm run dev
   ```

## API Routes

### Create a Movie
**POST** `/movie`
- **Request Body:**
  ```json
  {
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi"
  }
  ```
- **Validation:** Uses `movieCreateValidation()` middleware.
- **Response:** Returns the created movie object.

### Get All Movies
**GET** `/movie`
- **Response:** Returns an array of all movies in the database.

### Get a Movie by ID
**GET** `/movie/:id`
- **Response:** Returns the movie object with the specified ID.

### Update a Movie
**PATCH** `/movie/:id`
- **Request Body:** Partial update allowed (e.g., updating only the title).
- **Response:** Returns the updated movie object.

### Delete a Movie
**DELETE** `/movie/:id`
- **Response:** Deletes the movie with the specified ID and returns a success message.

## Middleware
- **`handleValidator`**: Handles request validation errors.
- **`movieValidation`**: Ensures movie data meets requirements before being saved.

## Running the Project in Development Mode
Use **nodemon** for automatic server restarts during development:
```sh
npm run dev
```

## License
This project is licensed under the MIT License.

