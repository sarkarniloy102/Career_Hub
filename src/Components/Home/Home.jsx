import Banner from "../Banner/Banner";
import CategoriesJob from "../CategoriesJob/CategoriesJob";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const Home = () => {
    return (
        <div>
            <h2>this is home</h2>
            <Banner></Banner>
            <CategoriesJob></CategoriesJob>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;