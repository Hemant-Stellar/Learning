import React from 'react';
import {useList} from './useList';

function Todo(){
    const {list} = useList();
    return (
        <div>
            <form>
                <input type = "text"/>
                <button type = "submit">Add</button>
            </form>
            <ul>
                {list.map(item)=><li key = {item}></li>
                    
            </ul>
            
        </div>
    )
}