import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoredjobapplication } from "../Utilities/Localstorage";

const AppliedJob = () => {
    const jobs = useLoaderData();
    const [appliedjob, setappliedjob] = useState([]);
    useEffect(() => {
        const storedjobId = getstoredjobapplication();
        if (jobs.length > 0) {
            // const jobsapplied = jobs.filter(job => storedjobId.includes(job.id))
            // console.log(jobsapplied);
            const jobsapplied = [];
            for (const id of storedjobId) {
                const job = jobs.find(job => job.id === id);
                if (job)
                    jobsapplied.push(job)
            }
            setappliedjob(jobsapplied);
        }

    }, [jobs])
    return (
        <div>
            <h2 className="text-center">Applied job: {appliedjob.length}</h2>
            <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Filter</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>Onsite</a></li>
                </ul>
            </div>

            <ul >
                {
                    appliedjob.map(job => <li key={job.id}>
                        <div className="border rounded-lg bg-slate-100 p-5 mb-5">
                            <span >{job.job_title} <br /> {job.company_name} <br /> {job.remote_or_onsite}</span>
                        </div>

                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJob;