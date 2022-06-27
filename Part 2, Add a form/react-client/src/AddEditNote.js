import React from 'react';
import RenderData from "./RenderData";
import Form from './Form';

const noteEntity = {
    id: 1,
    title: 'A Note',
    content: 'Lorem ipsum dolor sit amet',
    author: 'neohed',
    lang: 'en',
    isLive: true,
    category: '',
}

const AddEditNote = () => {
    return (
        <div>
            <RenderData
                data={noteEntity}
            />
            <Form
                entity={noteEntity}
            />
        </div>
    );
};

export default AddEditNote;
