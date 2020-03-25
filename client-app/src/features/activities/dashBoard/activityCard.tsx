import React, {useContext} from "react";
import {Item, Button, Label, Segment} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";
import activityStore from "../../../app/stores/activityStore";
import {observer} from "mobx-react-lite";

interface IProps {
    activity: IActivity
}

const ActivityCard: React.FC<IProps> = ({activity}) => {
    const store = useContext(activityStore);

    const handleDelete = (id: string) => {
        store.handleDeleteActivity(id);
        store.handleMode(Mode.none, new Activity());
    };
    const handleView = (activity: IActivity) => {
        store.setActivity(activity);
        store.handleMode(Mode.view, store.activity);
    };

    return (
        <Segment clearing>
            <Item.Group divided>
                <Item key={activity.id}>
                    <Item.Content>
                        <Item.Header as='a'>{activity.title}</Item.Header>
                        <Item.Meta>{activity.date}</Item.Meta>
                        <Item.Description>
                            <div>{activity.description}</div>
                            <div>{activity.city}, {activity.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button content={'View'} floated={'right'} color={'blue'}
                                    onClick={() => handleView(activity)}/>
                            <Button content={'Delete'} floated={'right'} color={'red'}
                                    onClick={() => handleDelete(activity.id)}/>
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )
};

export default observer(ActivityCard);