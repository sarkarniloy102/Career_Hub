import { MdLocationOn, MdCurrencyBitcoin } from "react-icons/md";
import { Link } from "react-router-dom";
const FJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
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
                <div className="flex gap-3 mt-3">
                    <h2 className="flex gap-1"> <MdLocationOn className="text-2xl"></MdLocationOn> {location}</h2>
                    <h2 className="flex gap-1">  <MdCurrencyBitcoin className="text-2xl"></MdCurrencyBitcoin>Salary:  {salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/FJob/${id}`}><button className="btn btn-primary">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FJob;