import React from "react";
import {Item, Button, Label, Segment} from "semantic-ui-react";
import {IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";

interface IProps {
    activity: IActivity;
    handleMode: (mode: Mode,act:IActivity) => void;
    handleDeleteActivity: (id: string) => void;
}

const Activity: React.FC<IProps> = ({activity, handleMode,handleDeleteActivity}) => {
    const handleDelete = (id: string) => {
        handleDeleteActivity(activity.id);
        handleMode(Mode.none,activity);
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
                                    onClick={() => handleMode(Mode.view,activity)}/>
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

export default Activity