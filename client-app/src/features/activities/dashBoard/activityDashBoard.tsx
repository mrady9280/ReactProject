import React from "react";
import {Container, Grid, GridColumn, List} from "semantic-ui-react";
import {IActivity} from "../../../app/models/activity";
import Activity from "./activity";
import ActivityDetails from "../details/activityDetail";
import ActivityForm from "../form/activityForm";

interface IProps {
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity) => void;
}

const ActivityDashBoard: React.FC<IProps> = ({
                                                 activities,
                                                 selectActivity,
                                                 selectedActivity,
                                                 editMode,
                                                 setEditMode,
                                                 setSelectedActivity
                                             }) => {
    return (
        <Grid>
            <GridColumn width={10}>
                <List>
                    {activities.map((activity) => (

                        <Activity activity={activity} selectActivity={selectActivity}/>
                    ))}
                </List>
            </GridColumn>
            <GridColumn width={6}>
                {selectedActivity  && selectedActivity.id.length != 0 && !editMode &&
                <ActivityDetails selectedActivity={selectedActivity} setEditMode={setEditMode}
                                 setSelectedActivity={setSelectedActivity}/>
                }
                {editMode &&
                <ActivityForm setEditMode={setEditMode} selectedActivity={selectedActivity}/>
                }
            </GridColumn>
        </Grid>
    )
};

export default ActivityDashBoard