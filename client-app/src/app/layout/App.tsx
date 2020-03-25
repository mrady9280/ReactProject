import React, {useEffect, Fragment, useContext} from 'react';
import {Container} from "semantic-ui-react";
import NavBar from "../../features/nav/navBar";
import ActivityDashBoard from "../../features/activities/dashBoard/activityDashBoard";
import activityStore from "../stores/activityStore";
import {observer} from "mobx-react-lite";


const App = () => {

    const store = useContext(activityStore);
    //States
    //Affect
    useEffect(() => {
        store.loadActivities();
    }, [store]);
    //Handlers
    return (
        <Fragment>
            <NavBar/>
            <Container style={{marginTop: '7em'}}>
                <ActivityDashBoard/>
            </Container>
        </Fragment>
    );
};

export default observer(App);
