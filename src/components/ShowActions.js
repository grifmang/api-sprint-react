import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowActions = (props) => {

    const [actions, setActions] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/actions/${props.match.params.id}`)
        .then(response => {
            setActions(response.data);
        })
    }, [props.match.params.id])

    return (
        <>
        {actions
        ? actions.map(element => {
            return <section style={{ width: '500px' }} class="hero is-medium is-primary is-bold">
                <div class="hero-body">
                    <div class="container">
                    <h1 class="title">
                        {element.notes}
                    </h1>
                    <h2 class="subtitle">
                        {element.notes}
                    </h2>
                    </div>
                </div>
            </section>
        })
        : null}
        </>
    )
}

export default ShowActions;