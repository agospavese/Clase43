import React from "react"
import '../assets/css/app.css'
import ContentRowMovies from "./ContentRowMovies"
import LastMovieInDb from "./LastMovieInDb"
import GenresInDb from "./GenresInDb"


function ContentRowTop() {
	return (
		<div>
			<ContentRowMovies  titulos={["Movies in Data Base", "Total awards", "Actors quantity"]} cifras={[21, 79, 49]} iconos={["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"]} colorBordes={["card border-left-primary shadow h-100 py-2","card border-left-success shadow h-100 py-2","card border-left-warning shadow h-100 py-2"]}/>
			<LastMovieInDb />
			<GenresInDb />
		</div>
	);
}

export default ContentRowTop;