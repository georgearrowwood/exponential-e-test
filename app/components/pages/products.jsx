import React from 'react';
import { Grid, Col } from 'react-bootstrap/lib';

import ProductsList from '../products/list';
import SearchProducts from '../products/search';

export default () => (
  <Grid fluid>
    <Col sm={12} md={12} className="main">
      <SearchProducts />
      <ProductsList />
    </Col>
  </Grid>
);
