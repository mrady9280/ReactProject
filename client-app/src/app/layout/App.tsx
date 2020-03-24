import React, {useState, useEffect, Fragment} from 'react';
import Axios from "axios";
import {Container} from "semantic-ui-react";
import {Activity, IActivity} from "../models/activity";
import NavBar from "../../features/nav/navBar";
import ActivityDashBoard from "../../features/activities/dashBoard/activityDashBoard";
import {Mode} from "../models/modes";


const App = () => {

    //States
    const [activities, setActivities] = useState<IActivity[]>(new Array<Activity>());
    const [activity, setActivity] = useState<IActivity>(new Activity());
    const [mode, setMode] = useState<Mode>(Mode.none);
    //Affect
    useEffect(() => {
        Axios.get<IActivity[]>("http://localhost:5000/api/activities").then((response) => {
            let acts = Array<IActivity>();
            response.data.forEach(act =>{
               act.date = act.date.split('.')[0];
               acts.push(act);
            });
            setActivities(acts);
        });
    }, []);

    //Handlers
    const handleMode = (mode: Mode, act: IActivity = new Activity()) => {
        switch (mode) {
            case Mode.view : {
                setActivity(act);
                setMode(Mode.view);
                break;
            }
            case Mode.create : {

                setActivity(new Activity());
                setMode(Mode.create);
                console.log(mode);
                break;
            }
            case Mode.edit : {
                setActivity(act);
                setMode(Mode.edit);
                break;
            }
            default : {
                setMode(Mode.none);
                setActivity(new Activity());
                break;
            }
        }
    };
    const handleCreateActivity = (act:IActivity) => {
      setActivities([...activities,act]);  
    };
    const handleEditActivity = (act:IActivity) =>{
      setActivities([...activities.filter(a=> a.id !== act.id),act])
    };
    const handleDeleteActivity = (id:string)=>{
        setActivities([...activities.filter(a=> a.id !== id)]);
    };


    return (
        <Fragment>
            <NavBar handleMode={handleMode}/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashBoard
                    activities={activities}
                    activity={activity!}
                    mode={mode}
                    handleMode={handleMode}
                    handleCreateActivity={handleCreateActivity}
                    handleEditActivity={handleEditActivity}
                    handleDeleteActivity={handleDeleteActivity}
                />
            </Container>
        </Fragment>
    );


};

export default App;
