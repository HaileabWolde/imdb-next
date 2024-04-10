import Image from 'next/image'
const moviepage = async ({ params})=>{
    const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
 
    const movie = await res.json()
    return (
        <div className="w-full">
            <div className="">
            <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
        ></Image>

            </div>
        </div>
    )
}
export default moviepage