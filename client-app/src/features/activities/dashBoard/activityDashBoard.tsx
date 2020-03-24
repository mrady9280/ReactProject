import React from "react";
import {Grid, GridColumn, List} from "semantic-ui-react";
import {IActivity} from "../../../app/models/activity";
import Activity from "./activity";
import ActivityDetails from "../details/activityDetail";
import ActivityForm from "../form/activityForm";
import {Mode} from "../../../app/models/modes";

interface IProps {
    activities: IActivity[];
    activity: IActivity;
    mode: Mode;
    handleMode: (mode: Mode, act: IActivity) => void;
    handleCreateActivity: (activity: IActivity) => void;
    handleEditActivity: (activity: IActivity) => void;
    handleDeleteActivity: (id: string) => void;
}

const ActivityDashBoard: React.FC<IProps> = ({
                                                 activities,
                                                 activity,
                                                 mode,
                                                 handleMode,
                                                 handleCreateActivity,
                                                 handleEditActivity,
                                                 handleDeleteActivity
                                             }) => {

    return (
        <Grid>
            <GridColumn width={10}>
                <List>
                    {activities.map((activity) => (

                        <Activity activity={activity} key={activity.id}
                                  handleMode={handleMode} handleDeleteActivity={handleDeleteActivity}/>
                    ))}
                </List>
            </GridColumn>
            <GridColumn width={6}>
                {activity.id.length > 0 && mode === Mode.view &&
                <ActivityDetails activity={activity} handleMode={handleMode}/>
                }
                {
                    (mode === Mode.create || mode === Mode.edit) &&
                    <ActivityForm handleMode={handleMode} activity={activity}
                                  handleCreateActivity={handleCreateActivity} mode={mode}
                                  handleEditActivity={handleEditActivity} key={activity.id}/>
                }

            </GridColumn>
        </Grid>
    )
};

export default ActivityDashBoard