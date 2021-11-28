import React from "react"
import '../assets/css/app.css'
import ContentRowMovies from "./ContentRowMovies"
import LastMovieInDb from "./LastMovieInDb"
import GenresInDb from "./GenresInDb"


function ContentRowTop() {
	return (
		<div>
			<ContentRowMovies />
			<LastMovieInDb />
			<GenresInDb />
		</div>
	);
}

export default ContentRowTop;