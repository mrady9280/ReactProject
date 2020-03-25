import {action, computed, configure, observable, runInAction} from "mobx";
import {createContext} from "react";
import {Activity, IActivity} from "../models/activity";
import activitiesService from "../api/agent";
import {Mode} from "../models/modes";


configure({enforceActions: "always"});

export class ActivityStore {
    //Observables
    @observable activities= new Map();
    @observable activity: IActivity = new Activity();
    @observable mode: Mode = Mode.none;


    //Computed
    @computed get ActivitiesSortByDate() {
        return Array.from( this.activities.values()).sort((a, b)=> Date.parse(a.date) - Date.parse(b.date));
    }
    //Actions
    @action handleMode = (mode: Mode, act: IActivity = new Activity()) => {
        switch (mode) {
            case Mode.view : {
                this.activity = act;
                this.mode = Mode.view;
                break;
            }
            case Mode.create : {
                this.activity = new Activity();
                this.mode = Mode.create;
                break;
            }
            case Mode.edit : {
                this.activity = act;
                this.mode = Mode.edit;
                break;
            }
            default : {
                this.mode = Mode.none;
                this.activity = new Activity();
                break;
            }
        }
    };
    @action loadActivities = async () => {
        try {
            const activities = await activitiesService.list();
            runInAction(()=>{
                activities.forEach(act => {
                    act.date = act.date.split('.')[0];
                    this.activities.set(act.id,act);
                }); 
            });
           
        } catch (error) {
            console.log(error);
        }
    };

    @action setActivity(activity: IActivity) {
        this.activity = activity;
    }

    @action handleCreateActivity = async (act: IActivity) => {
        try {
            console.log(act);
            await activitiesService.create(act);
            runInAction(()=>{
                this.activities.set(act.id,act);
            });
        } catch (error) {
            console.log(error);
        }
    };
    @action handleEditActivity = async (act: IActivity) => {
        try {
            console.log(act);
            await activitiesService.update(act);
            runInAction(()=>{
                this.activities.set(act.id,act); 
            });
            
        } catch (error) {
            console.log(error);
        }

    };
    @action handleDeleteActivity = async (id: string) => {
        try {
            await activitiesService.delete(id);
            runInAction(()=>{
                this.activities.delete(id);
            });
            
        } catch (error) {
            console.log(error);
        }

    };
}

export default createContext(new ActivityStore())