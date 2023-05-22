import { useEffect } from 'react'

const StartOnTop = () => {
    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };

        const handleNavigate = () => {
            handleScrollToTop();
        };

        window.addEventListener('beforeunload', handleScrollToTop);
        return () => {
            window.removeEventListener('beforeunload', handleScrollToTop);
        };
    }, []);

    return null;
};

export default StartOnTop