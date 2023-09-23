import { useEffect, useState } from "react";
import FJob from "../FJob/FJob";


const FeaturedJob = () => {

    const [jobs, setjobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjobs(data))
    }, []);

    return (
        <div>
            <div className=" text-center">
                <h2 className="text-4xl "> Featured Jobs: {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10">
                {
                    jobs.map(job => <FJob key={job.id} job={job}></FJob>)
                }
            </div>


        </div>
    );
};

export default FeaturedJob;