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
            setActivities(response.data);
        });
    }, []);

    //Handlers
    const handleMode = (mode: Mode,act: IActivity = new Activity()) => {
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


    return (
        <Fragment>
            <NavBar handleMode={handleMode}/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashBoard
                    activities={activities}
                    activity={activity!}
                    mode={mode}
                    handleMode={handleMode}
                />
            </Container>
        </Fragment>
    );


};

export default App;
