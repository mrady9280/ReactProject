import React, {useContext} from "react";
import {Button, Container, Menu} from "semantic-ui-react";
import {Mode} from "../../app/models/modes";
import {Activity} from "../../app/models/activity";
import activityStore from "../../app/stores/activityStore";
import {observer} from "mobx-react-lite";

interface IProp {
}

const NavBar: React.FC<IProp> = () => {
    const store = useContext(activityStore);
    return (
        <Menu fixed={"top"} inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    Activities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content="Create Activity"
                            onClick={() => store.handleMode(Mode.create, new Activity())}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default observer(NavBar)