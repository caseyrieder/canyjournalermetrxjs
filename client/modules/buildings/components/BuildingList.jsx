import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';
// Create building-list component for all buildings
const BuildingList = ({buildings}) => (
  <Grid>
    {buildings.length === 0 ? <p>No buildings yet!</p> : null}
    {buildings.map(building => (
      <Row key={building._id}>
        <Panel>
          <a href={`/building/${building._id}`}>
            <b>{building.address}</b>
          </a>          
        </Panel>
      </Row>
    ))}
  </Grid>
);
// Export building-list component
export default BuildingList;
