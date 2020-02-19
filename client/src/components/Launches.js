import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading)
    return (
      <Fragment>
        <h4>Loading...</h4>
      </Fragment>
    );
  if (error) console.log(error);

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <Fragment>
        {data.launches.map(launch => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </Fragment>
    </div>
  );
};

export default Launches;
