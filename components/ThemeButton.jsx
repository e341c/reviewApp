"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeButton = () => {
    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    return (
        <Button
            variant="outline-secondary"
            style={{width:"42px"}}
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
        >
            {resolvedTheme === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
            ) : (
                <FontAwesomeIcon icon={faMoon} />
            )}
        </Button>
    );
};

export default ThemeButton;
