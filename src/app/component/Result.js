const Results = ({ results })=>{
    return (
        <div>
            {
                results?.map((result)=> {
                    return (
                        <div key={result._id}>
                            <h1>{result.original_title}</h1>
                        </div>
                    )})}
        </div>
    )

}
export default Results;