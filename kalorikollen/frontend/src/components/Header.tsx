import HeaderImage from "./HeaderImage";
import leftImage from "../assets/leftFilled1.jpg";
import rightImage from "../assets/rightFilled1.jpg";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <div className="bg-emerald-600 flex items-center justify-between max-w-screen-xl mx-auto">
            <HeaderImage src={leftImage} alt="Left image" side="left" className="self-end" />
            <header className=" py-4 px-6  text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-emerald-100 drop-shadow-sm tracking-wide ">
                    {title}
                </h1>
            </header>
            <HeaderImage src={rightImage} alt="Right image" side="right" className="self-end" />
        </div>
    )
};

export default Header;