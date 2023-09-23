import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savejobapplication } from "../Utilities/Localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id == id);
    // console.log(job);
    const handleapplyjob = () => {

        savejobapplication(parseInt(id));
        toast.success('Applied Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center my-6">Job Details</h2>

            <div className="grid gap-4 md:grid-cols-4">

                <div className="border md:col-span-3">
                    <h2 className="text-2xl">Details coming soon</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side things</h2>
                    <button onClick={handleapplyjob} className="btn btn-primary">Aply now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default JobDetails;