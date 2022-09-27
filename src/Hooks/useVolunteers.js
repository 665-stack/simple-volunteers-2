import { useEffect, useState } from "react";

const useVolunteers = () => {
    const [volanteers, setVolanteers] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setVolanteers(data))
    }, [])

    return [volanteers, setVolanteers];
};

export default useVolunteers;