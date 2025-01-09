import { useState, useEffect } from "react";

export default function CurrentPath({ onPathChange }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handlePathChange = () => {
            const newPath = window.location.pathname;
            setCurrentPath(newPath);
            if (onPathChange) {
                onPathChange(newPath);
            }
        };

        window.addEventListener("popstate", handlePathChange);

        return () => {
            window.removeEventListener("popstate", handlePathChange);
        };
    }, [onPathChange]);

    return null; // No necesita renderizar nada.
}
