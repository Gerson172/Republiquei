import NavBar from "../../components/NavBar";
import Skeleton from "../../components/Skeleton";

const About = () => {
    return (
        <>
        <NavBar/>
        <div className="flex flex-col">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        </div>
        </>
    )
}

export default About;