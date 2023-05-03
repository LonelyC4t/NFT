import { useEffect, useState } from "react";

function useWindowWidth() {

    const [windowWidth, setWindowWidth] = useState(undefined);
    
    useEffect(() => {
        
        const handleResize = () => {

            return setWindowWidth(window.innerWidth)
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowWidth;
};

export {useWindowWidth};
