import React, {FormEvent, useState} from "react";
import {Button, Form, FormInput, FormTextArea, Segment} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";
import {v4 as uuid} from "uuid";

interface IProps {
    handleMode: (mode: Mode, act: IActivity) => void;
    activity: Activity;
    handleCreateActivity: (activity: IActivity) => void;
    mode: Mode;
    handleEditActivity: (activity: IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({
                                            handleMode,
                                            activity: InitialFormState,
                                            handleCreateActivity,
                                            mode,
                                            handleEditActivity
                                        }) => {

    const initializeForm = () => {
        if (InitialFormState.id.length > 0) {
            return InitialFormState;

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
        if (mode === Mode.create) {
            let newActivity = {...stateActivity, id: uuid()};
            handleCreateActivity(newActivity);
        } else {
            handleEditActivity(stateActivity);
        }
        handleMode(Mode.none, new Activity());
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
                        onClick={() => handleMode(Mode.none, stateActivity)}/>
            </Form>
        </Segment>
    )
};

export default ActivityForm