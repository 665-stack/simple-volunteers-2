
import { useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    // ami caile setVolantrees take naw import korte pari. Shetar khub akta kaj akhane nai.
    const [volanteers] = useVolunteers();
    const [searchResult, setSearchResult] = useState([]);

    const handleSearchChange = event => {
        const searchtext = (event.target.value);
        const match = volanteers.filter(v => v.title.includes(searchtext));
        setSearchResult(match);
    }
    return (
        <div>
            <h2>Valunteers activities: {volanteers.length}</h2>

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