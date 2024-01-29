import React, { useState } from 'react';
import { Form } from "react-bootstrap";
export const Searcher = ({ setValueForSearch }) =>
{

    return (
        <>
            <Form.Control type="text" className="w-50 mx-auto my-4" onChange={(e) => setValueForSearch(e.target.value)} placeholder="Buscar por nombre o usuario..." />
        </>
    );
};
