    import Navbar from "../components/Navbar";
    import Annoucemment from "../components/Annoucemment";
    import Slider from "../components/Slider";
    import Categories from "../components/Categories";
    import Products from "../components/Products";

    const Home = () => {
    return (
        <div className="container">
            <Annoucemment/>
            <Navbar/>
            <Slider/>
            <Categories />
            <Products />
        </div>
    );
    };

    export default Home;