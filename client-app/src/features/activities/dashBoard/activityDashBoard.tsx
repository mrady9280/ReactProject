import React, {useContext} from "react";
import {Grid, GridColumn, List} from "semantic-ui-react";
import ActivityCard from "./activityCard";
import ActivityDetails from "../details/activityDetail";
import ActivityForm from "../form/activityForm";
import {Mode} from "../../../app/models/modes";
import {observer} from "mobx-react-lite";
import activityStore from "../../../app/stores/activityStore";

interface IProps {
}

const ActivityDashBoard: React.FC<IProps> = () => {
    const store = useContext(activityStore);

    return (
        <Grid>
            <GridColumn width={10}>
                <List>
                    {store.ActivitiesSortByDate.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity}/>
                    ))}
                </List>
            </GridColumn>
            <GridColumn width={6}>
                {store.activity.id.length > 0 && store.mode === Mode.view &&
                <ActivityDetails/>
                }
                {
                    (store.mode === Mode.create || store.mode === Mode.edit) &&
                    <ActivityForm key={store.activity.id}/>
                }

            </GridColumn>
        </Grid>
    )
};

export default observer(ActivityDashBoard)