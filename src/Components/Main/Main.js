
import { useEffect, useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    // ami caile setVolantrees take naw import korte pari. Shetar khub akta kaj akhane nai.
    // const [volanteers] = useVolunteers();

    //akhane searchText ta holo string. mane text. tai default value '' deya hoice.
    const [searchText, setSearchText] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        console.log('inside useEffect');
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText));
                setSearchResult(match)

            })
    }, [searchText])

    const handleSearchChange = event => {
        setSearchText(event.target.value);
    }

    // 1st system to implement search
    // const handleSearchChange2 = event => {
    //     const searchtext = (event.target.value);
    //     const match = volanteers.filter(v => v.title.includes(searchtext));
    //     setSearchResult(match);
    // }
    return (
        <div>
            <h2>Valunteers activities: {searchResult.length}</h2>

            <div className='input-container'>
                <input onChange={handleSearchChange} className='input' type="text" placeholder='search' />
            </div>


            <div className='activity-container'>
                {
                    searchResult.map(activity => <Activity activity={activity} key={activity?.taskId}></Activity>)

                }
            </div>
        </div>
    );
};

export default Main;