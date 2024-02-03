import {useEffect, useState} from "react";
import {initialStateContentHeight} from "./displayedPosts";

export function useScrollStatus(pos: number) {
    const [positionY, setPositionY] = useState(pos);
    const getWindowPosition = () => setPositionY(pos + window.scrollY);
    useEffect(() => {
        function setScrollY() {
            window.addEventListener("scroll", getWindowPosition);
            return () => {
                document.removeEventListener("scroll", getWindowPosition);
            };
        }
        setScrollY();
    }, [positionY]);
    return positionY;
}
