import React from 'react';
import '../styles/ToolBar.css';
import { ToolBarElement } from './ToolBarElement';

const ToolBar = () => {
    return(
        <div className='toolBar'>
            {ToolBarElement.map(element => (
                <div className='toolBarIcons' key={element.id}>
                    {element.icon}
                </div>
            ))}
        </div>
    )
}

export default ToolBar;