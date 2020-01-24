import React from 'react'
import './homepage.styles.scss';

import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

import AddTask from '../add-task/AddTask';
import TaskList from '../task-list/TaskList';

const override = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin: 15% 0;
    align-items: center;
`;


const Homepage = ({ currentUser, isLoading }) => {
    if (!isLoading) {
        return (
            <div className="container">
                {
                    currentUser ?
                        (<div className="homepage">
                            <AddTask currentUser={currentUser} />
                            <TaskList currentUser={currentUser} />
                        </div>)
                        :
                        (<div className="sin-logear">
                            <h1 className="bienvenida">¡Bienvenido! Inicie sesion para continuar...</h1>
                        </div>)
                }
            </div>
        )
    } else {
        return (
            <React.Fragment>
                <BeatLoader
                    css={override}
                    size={60}
                    margin={10}
                    //size={"150px"} this also works
                    color={"#CF1259"}
                />
            </React.Fragment>
        )
    }
}

export default Homepage
