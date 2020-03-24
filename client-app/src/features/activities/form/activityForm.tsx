import React, {FormEvent, useState} from "react";
import {Button, Form, FormInput, FormTextArea, Segment} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";

interface IProps {
    handleMode: (mode: Mode,act:IActivity) => void;
    activity: Activity;
}

const ActivityForm: React.FC<IProps> = ({
                                            handleMode,
                                            activity:InitialFormState
                                        }) => {
    
    const initializeForm = ()=>{
        if(InitialFormState.id.length > 0 ){
            return InitialFormState;
        }else{
            return new Activity();
        }
    };
    const [stateActivity, setActivity] = useState<IActivity>(initializeForm);


    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActivity({...stateActivity, [name]: value})
    };
    const handleSubmit = () => {
        console.log(stateActivity);
    };
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <FormInput placeholder={'Title'} name='title' value={stateActivity.title}
                           onChange={handleInputChange}/>
                <FormTextArea rows={2} placeholder={'Description'} name={'description'} value={stateActivity.description}
                              onChange={handleInputChange}/>
                <FormInput placeholder={'Category'} name='category' value={stateActivity.category}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'Date'} name={'date'} value={stateActivity.date}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'City'} name={'city'} value={stateActivity.city}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'Venue'} name={'venue'} value={stateActivity.venue}
                           onChange={handleInputChange}/>
                <Button floated={'right'} positive type={'submit'} content={'Save'}/>
                <Button floated={'right'} type={'button'} content={'Cancel'} onClick={() => handleMode(Mode.none,stateActivity)}/>
            </Form>
        </Segment>
    )
};

export default ActivityForm