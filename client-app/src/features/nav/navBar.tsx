import React from "react";
import {Button, Container, Menu} from "semantic-ui-react";

interface IProp{
    handleCreateMode: ()=>void;
}

const NavBar: React.FC<IProp> = ({handleCreateMode}) => {
    return (
        <Menu fixed={"top"} inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    Activities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive content="Create Activity" onClick={ handleCreateMode}/>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default NavBar