import React, {useContext} from "react";
import {Button, ButtonGroup, Card, Image} from "semantic-ui-react";
import {Activity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";
import activityStore from "../../../app/stores/activityStore";
import {observer} from "mobx-react-lite";

interface IProp {
}

const ActivityDetails: React.FC<IProp> = () => {
    const store = useContext(activityStore);
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${store.activity?.category}.jpg`} wrapped ui={false}/>
            <Card.Content>
                <Card.Header>{store.activity.title}</Card.Header>
                <Card.Meta>
                    <span>{store.activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {store.activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths={2}>
                    <Button basic color='blue' content={'Edit'}
                            onClick={() => store.handleMode(Mode.edit, store.activity)}/>
                    <Button basic color='grey' content={'Cancel'}
                            onClick={() => store.handleMode(Mode.none, new Activity())}/>
                </ButtonGroup>
            </Card.Content>
        </Card>
    )
};

export default observer(ActivityDetails)