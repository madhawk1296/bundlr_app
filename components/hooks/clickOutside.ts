import { useEffect } from "react";

export default function clickOutside(menuRef, menu, onClose) {
    const handleClickOutside = (e) => {
        // if click is outside of menu, close menu
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if(menu) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [menu]);
}