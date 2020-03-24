import React, {FormEvent, useEffect, useState} from "react";
import {Button, Form, FormInput, FormTextArea, Segment} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import {Mode} from "../../../app/models/modes";

interface IProps {
    handleMode: (mode: Mode,act:IActivity) => void;
    activity: Activity;
}

const ActivityForm: React.FC<IProps> = ({
                                            handleMode,
                                            activity
                                        }) => {
    const [selectedActivity, setActivity] = useState<IActivity>(new Activity());

    useEffect(()=>{
        if(activity.id.length > 0){
            setActivity(activity);
        }else{
            setActivity(new Activity());
        }
    },[]);

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(event);
        const {name, value} = event.currentTarget;
        setActivity({...activity, [name]: value})
    };
    const handleSubmit = () => {
        console.log(activity);
    };
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <FormInput placeholder={'Title'} name='title' value={activity?.title}
                           onChange={handleInputChange}/>
                <FormTextArea rows={2} placeholder={'Description'} value={activity?.description}
                              onChange={handleInputChange}/>
                <FormInput placeholder={'Category'} name='category' value={activity?.category}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'Date'} name={'date'} value={activity?.date}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'City'} name={'city'} value={activity?.city}
                           onChange={handleInputChange}/>
                <FormInput placeholder={'Venue'} name={'venue'} value={activity?.venue}
                           onChange={handleInputChange}/>
                <Button floated={'right'} positive type={'submit'} content={'Save'}/>
                <Button floated={'right'} type={'button'} content={'Cancel'} onClick={() => handleMode(Mode.none,selectedActivity)}/>
            </Form>
        </Segment>
    )
};

export default ActivityForm