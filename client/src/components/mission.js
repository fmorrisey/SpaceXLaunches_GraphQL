import React from 'react'

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCHES_QUERY = gql
`   
    query LAUNCHES_QUERY($flight_number: Int!)  {
        launch(flight_number: $flight_number)    {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local,
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`

export default function mission() {
    return (
        <div>
            <h1>Mission</h1>            
        </div>
    )
}


