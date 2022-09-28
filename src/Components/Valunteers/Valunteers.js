import React from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Valunteers = () => {
    // ami caile setVolantrees take naw import korte pari. Shetar khub akta kaj akhane nai.
    const [volanteers] = useVolunteers();
    return (
        <div>
            <h2>All volunteers </h2>
            <div className='activity-container'>
                {
                    volanteers.map(activity => <Activity activity={activity} key={activity?.taskId}></Activity>)
                }
            </div>
        </div>
    );
};

export default Valunteers;