import React, { useEffect, useState } from 'react';
import useVolunteers from '../../Hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    const [volanteers, setVolanteers] = useVolunteers();
    return (
        <div>
            <h2>Valunteers activities: {volanteers.length}</h2>

            <div className='activity-container'>
                {
                    volanteers.map(activity => <Activity activity={activity} key={activity?.taskId}></Activity>)

                }
            </div>
        </div>
    );
};

export default Main;