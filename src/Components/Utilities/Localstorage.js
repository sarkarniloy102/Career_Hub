const getstoredjobapplication = () => {
    const storedjobapplication = localStorage.getItem('job-applications');

    if (storedjobapplication)
        return JSON.parse(storedjobapplication);
    return [];
}

const savejobapplication = id => {
    const storedapplication = getstoredjobapplication();
    const exists = storedapplication.find(jobid => jobid === id);
    if (!exists)
        storedapplication.push(id);
    localStorage.setItem('job-applications', JSON.stringify(storedapplication));
}

export { getstoredjobapplication, savejobapplication }; 