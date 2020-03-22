import React, {Component} from 'react';
import Axios from "axios";
import {Header, Icon, List} from "semantic-ui-react";
import {IActivity} from "../models/activity";

interface IState {
    activities: IActivity[]
}
class App extends Component<{},IState> {
    readonly state:IState = {
        activities: []
    };

    componentDidMount(): void {
        Axios.get<IActivity[]>("http://localhost:5000/api/activities").then((response) => {
            this.setState({
                activities: response.data
            });
        });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div>
                <Header as='h2'>
                    <Icon name='users'/>
                    <Header.Content>Reactivities</Header.Content>
                </Header>
                <List>
                    {this.state.activities.map((activity) => (
                        <List.Item key={activity.id}>{activity.title}</List.Item>
                    ))}
                </List>
            </div>
        );
    }


}

export default App;
