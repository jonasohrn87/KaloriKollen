interface HeaderImageProps {
    src: string;
    alt: string;
    side: 'left' | 'right';
    className?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ src, alt, side, className }) => {
    return (
        <img 
            src={src}
            alt={alt}
            className={`h-40 w-auto overflow-hidden bg-emerald-600 ${side === "left" ? "mr-2" : "ml-2"} ${className || ''}`}
            />
    );
}

export default HeaderImage;