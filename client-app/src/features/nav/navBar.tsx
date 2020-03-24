import React from "react";
import {Button, Container, Menu} from "semantic-ui-react";
import {Mode} from "../../app/models/modes";
import {Activity, IActivity} from "../../app/models/activity";

interface IProp{
    handleMode: (mode: Mode,act:IActivity)=>void;
}

const NavBar: React.FC<IProp> = ({handleMode}) => {
    return (
        <Menu fixed={"top"} inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    Activities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content="Create Activity" onClick={()=> handleMode(Mode.create,new Activity())}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default NavBar