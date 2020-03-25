import React, {FormEvent, useContext, useState} from "react";
import {Button, Form, FormInput, FormTextArea, Segment} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";
import {v4 as uuid} from "uuid";
import activityStore from "../../../app/stores/activityStore";
import {observer} from "mobx-react-lite";

interface IProps {
}

const ActivityForm: React.FC<IProps> = () => {
    const store = useContext(activityStore);

    const initializeForm = () => {
        if (store.activity.id.length > 0) {
            return store.activity;

        } else {
            return new Activity();
        }
    };
    const [stateActivity, setActivity] = useState<IActivity>(initializeForm);


    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActivity({...stateActivity, [name]: value})
    };
    const handleSubmit = () => {
        if (store.mode === Mode.create) {
            let newActivity = {...stateActivity, id: uuid()};
            store.handleCreateActivity(newActivity);
        } else {
            store.handleEditActivity(stateActivity);
        }
        store.handleMode(Mode.none, new Activity());
    };
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <FormInput placeholder={'Title'} name='title' value={stateActivity.title}
                           onChange={handleInputChange}/>
                <FormTextArea rows={2} placeholder={'Description'} name={'description'}
                              value={stateActivity.description}
                              onChange={handleInputChange}/>
                <FormInput placeholder={'Category'} name='category' value={stateActivity.category}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'Date'} name={'date'} value={stateActivity.date}
                           onChange={handleInputChange} type={'datetime-local'}/>
                <FormInput placeholder={'City'} name={'city'} value={stateActivity.city}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'Venue'} name={'venue'} value={stateActivity.venue}
                           onChange={handleInputChange}/>
                <Button floated={'right'} positive type={'submit'} content={'Save'}/>
                <Button floated={'right'} type={'button'} content={'Cancel'}
                        onClick={() => store.handleMode(Mode.none, stateActivity)}/>
            </Form>
        </Segment>
    )
};

export default observer(ActivityForm)