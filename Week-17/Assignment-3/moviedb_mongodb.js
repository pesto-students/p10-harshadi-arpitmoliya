//1. Create a New Database and Collections:

//use MovieDB

// Create the three collections: "movies," "directors," and "actors":

db.createCollection("movies");
db.createCollection("directors");
db.createCollection("actors");

// 2. Design Schema and Insert Sample Data:

// movies:

{
  title: "Movie Title";
  releaseYear: 2022;
  genre: "Action";
  director: ObjectId("director_id");
  actors: [ObjectId("actor_id_1"), ObjectId("actor_id_2")];
}

// directors:

{
  name: "Director Name";
  nationality: "Country";
  moviesDirected: [ObjectId("movie_id_1"), ObjectId("movie_id_2")];
}

// actors:

{
  name: "Actor Name";
  nationality: "Country";
  moviesActedIn: [ObjectId("movie_id_1"), ObjectId("movie_id_2")];
}

//  Write MongoDB Queries:

// a) Find all movies released in a specific year:

db.movies.find({ releaseYear: 2021 });

// b) Find all movies in a specific genre:

db.movies.find({ genre: "Action" });

// c) Find all movies directed by a specific director:

db.movies.find({ director: ObjectId("director_id") });

// d) Find all movies that a specific actor acted in:

db.movies.find({ actors: ObjectId("actor_id") });

// e) Find all directors from a specific nationality:

db.directors.find({ nationality: "USA" });

// f) Find all actors from a specific nationality:

db.actors.find({ nationality: "UK" });

// Implement indexes for the relevant fields to optimize the performance of your queries.

// Index on the releaseYear field
db.movies.createIndex({ releaseYear: 1 });

// Index on the genre field
db.movies.createIndex({ genre: 1 });

// Index on the director field
db.movies.createIndex({ director: 1 });

// Index on the actors field (using a compound index)
db.movies.createIndex({ actors: 1 });
