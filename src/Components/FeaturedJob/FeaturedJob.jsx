import { useEffect, useState } from "react";
import FJob from "../FJob/FJob";


const FeaturedJob = () => {

    const [jobs, setjobs] = useState([]);

    const [datalength, setdatalength] = useState(4);

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
                    jobs.slice(0, datalength).map(job => <FJob key={job.id} job={job}></FJob>)
                }
            </div>
            <div
                className={(datalength === jobs.length && 'hidden')}>
                <button onClick={() => setdatalength(jobs.length)} className="btn btn-primary">See All Jobs</button>
            </div>

        </div >
    );
};

export default FeaturedJob;