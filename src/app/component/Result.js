
import Card from "./Card";
const Results = ({ results })=>{
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto py-4">
            {
                results?.map((result)=> {
                    return (
                        <Card 
                        result={result}
                        key={result._id}/>
                    )})}
        </div>
    )

}
export default Results;