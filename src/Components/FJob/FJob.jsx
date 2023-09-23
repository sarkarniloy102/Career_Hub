
const FJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <button className="px-4 py-2 border rounded-lg font-bold text-[#9873FF] border-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-4 py-2 border rounded-lg font-bold text-[#9873FF] border-[#7E90FE]">{job_type}</button>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default FJob;