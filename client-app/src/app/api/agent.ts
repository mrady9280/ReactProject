import Axios, {AxiosResponse} from "axios";
import {IActivity} from "../models/activity";

Axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => Axios.get(url).then(responseBody),
    post: (url: string, body: {}) => Axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => Axios.put(url, body).then(responseBody),
    delete: (url: string) => Axios.delete(url).then(responseBody)
};

const activitiesService = {
    list: ():Promise<Array<IActivity>> => request.get("/activities"),
    details: (id: string): Promise<IActivity> => request.get(`/activities/${id}`),
    create: (activity: IActivity) => request.post("activities", activity),
    update: (activity: IActivity) => request.put(`activities/${activity.id}`, activity),
    delete: (id: string) => request.delete(`/activities/${id}`),
};

export default activitiesService