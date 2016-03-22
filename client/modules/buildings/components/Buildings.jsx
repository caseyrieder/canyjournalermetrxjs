import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import NewBuilding from '../containers/NewBuilding.js';
import BuildingList from '../containers/BuildingList.js';
// Create Buildings component for all Buildings

// class Buildings extends React.Component {
//   render() {
//     return (
//       <Grid>
//         <Row>
//           <Col xs={6} xsOffset={3}>
//             <h2>New Building</h2>
//             <NewBuilding />
//             <h2>All Buildings</h2>
//             <BuildingList />
//           </Col>
//         </Row>
//       </Grid>
//     );
//   }
// }
const Buildings = () => (
  <Grid>
    <Row>
      <Col xs={6} xsOffset={3}>
        <h2>New Building</h2>
        <NewBuilding />
        <h2>All Buildings</h2>
        <BuildingList />
      </Col>
    </Row>
  </Grid>
);
// Export Buildings component
export default Buildings;
