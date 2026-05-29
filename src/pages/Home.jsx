    import Navbar from "../components/Navbar";
    import Annoucemment from "../components/Annoucemment";
    import Slider from "../components/Slider";
    import Categories from "../components/Categories";

    const Home = () => {
    return (
        <div className="container">
            <Annoucemment/>
            <Navbar/>
            <Slider/>
            <Categories />

        </div>
    );
    };

    export default Home;