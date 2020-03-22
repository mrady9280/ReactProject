import React from "react";
import {Button, ButtonGroup, Card, Icon, Image} from "semantic-ui-react";
import {IActivity} from "../../../app/models/activity";

interface IProp {
    selectedActivity:IActivity;
    setEditMode: (editMode:boolean) => void;
    setSelectedActivity: (activity:IActivity|null)=> void;
}
const ActivityDetails: React.FC<IProp> = ({selectedActivity,setEditMode, setSelectedActivity}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${selectedActivity?.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{selectedActivity.title}</Card.Header>
                <Card.Meta>
                    <span>{selectedActivity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {selectedActivity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
               <ButtonGroup widths={2}>
                   <Button basic color='blue' content={'Edit'} onClick={()=> setEditMode(true)}/>
                   <Button  basic color='grey' content={'Cancel'} onClick={()=> setSelectedActivity(null)} />
               </ButtonGroup>
            </Card.Content>
        </Card>
    )
};

export default ActivityDetails