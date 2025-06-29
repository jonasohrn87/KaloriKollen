interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <header className="bg-emerald-600 p-6 shadow-md text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-extrabold text-emerald-100 drop-shadow-sm tracking-wide ">
                {title}
            </h1>
        </header>
    )
};

export default Header;