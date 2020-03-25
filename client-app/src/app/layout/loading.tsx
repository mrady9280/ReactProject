import React from "react";
import {Dimmer, Loader} from "semantic-ui-react";

interface IProps {
    inverted?: boolean;
    content?: string;
}

const Loading: React.FC<IProps> = (inverted, content) => {
    return (
        <div>
            <Dimmer active inverted={inverted}>
                <Loader content={content}/>
            </Dimmer>
        </div>
    )
};

export default Loading