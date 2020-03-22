import React, {useState, useEffect, Fragment} from 'react';
import Axios from "axios";
import {Container, Header, Icon, List} from "semantic-ui-react";
import {Activity, IActivity} from "../models/activity";
import NavBar from "../../features/nav/navBar";
import ActivityDashBoard from "../../features/activities/dashBoard/activityDashBoard";


const App = () => {

    //States
    const [activities, setActivities] = useState<IActivity[]>(new Array<Activity>());
    const [viewMode, setViewMode] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [createMode, setCreateMode] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState<IActivity>(new Activity());
    
    //Affect
    useEffect(() => {
        Axios.get<IActivity[]>("http://localhost:5000/api/activities").then((response) => {
            setActivities(response.data);
        });
    }, []);
    
    //Handlers
    const handleSelectedActivity = (id: string) => {
        setEditMode(false);
        setSelectedActivity(activities.filter(e => e.id === id)[0]);
    };
    const handleCreateMode= ()=>{
      setSelectedActivity(new Activity());
      setEditMode(true);
    };
    


    return (
        <Fragment>
            <NavBar handleCreateMode={handleCreateMode}/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashBoard
                    activities={activities}
                    selectActivity={handleSelectedActivity}
                    selectedActivity={selectedActivity!}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    setSelectedActivity={setSelectedActivity}/>
            </Container>
        </Fragment>
    );


};

export default App;
