import React, {useEffect, useState} from "react";
import {Button, Form, FormInput, FormTextArea, Segment} from "semantic-ui-react";
import {Activity, IActivity} from "../../../app/models/activity";
import Axios from "axios";

interface IProps{
    setEditMode: (editMode:boolean) => void;
    selectedActivity: Activity
}

const ActivityForm:React.FC<IProps> = ({setEditMode,selectedActivity}) => {
    const [activities, setActivities] = useState<Activity>(new Activity());
    useEffect(() => {
        if(selectedActivity && selectedActivity.id.length > 0){
            setActivities(selectedActivity);
        }else{
            setActivities(new Activity());
        }
    }, []);
    return (
      <Segment clearing>
          <Form>
              <FormInput placeholder={'Title'} value={selectedActivity?.title}/>
              <FormTextArea rows={2} placeholder={'Description'} value={selectedActivity?.description}/>
              <FormInput placeholder={'Category'} value={selectedActivity?.category}/>
              <FormInput type={'date'} placeholder={'Date'} value={selectedActivity?.date}/>
              <FormInput placeholder={'City'} value={selectedActivity?.city}/>
              <FormInput placeholder={'Venue'} value={selectedActivity?.venue}/>
              <Button floated={'right'} positive type={'submit'} content={'Save'}/>
              <Button floated={'right'}  type={'button'} content={'Cancel'} onClick={()=> setEditMode(false)}/>
          </Form>
      </Segment>
    )
};

export default ActivityForm