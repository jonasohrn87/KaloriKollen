import React from "react";

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <main className="flex-grow p-6 bg-emerald-100">
            {children}
        </main>
    );
};
export default Main;