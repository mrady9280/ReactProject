import React from "react";
import {Item, Image, Button, Label, Segment} from "semantic-ui-react";
import {IActivity} from "../../../app/models/activity";

interface IProps{
    activity:IActivity;
    selectActivity: (id:string)=> void;
}
const Activity:React.FC<IProps> = ({activity,selectActivity}) => {
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
                            <Button content={'View'} floated={'right'} color={'blue'} onClick={()=> selectActivity(activity.id)}/>
                            <Label basic content={activity.category}/>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    )
};

export default Activity