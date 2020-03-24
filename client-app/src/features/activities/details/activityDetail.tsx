import React from "react";
import {Button, ButtonGroup, Card, Image} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";

interface IProp {
    activity:IActivity;
    handleMode: (mode:Mode,act:IActivity) => void;
}
const ActivityDetails: React.FC<IProp> = ({activity,handleMode}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity?.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <ButtonGroup widths={2}>
                   <Button basic color='blue' content={'Edit'} onClick={()=> handleMode(Mode.edit,activity)}/>
                   <Button  basic color='grey' content={'Cancel'} onClick={()=> handleMode(Mode.none,new Activity())} />
               </ButtonGroup>
            </Card.Content>
        </Card>
    )
};

export default ActivityDetails