import React from 'react';
import { Grid, Panel } from 'react-bootstrap/lib';

export default () => (
  <Grid>
    <Panel header="Home page">
      <p>Hello, this is test task by Juri Kalinin.</p>
      <p>This is simple implementation of products dashboard.</p>
      <p>Build with <b>React</b>, <b>Redux</b>, <b>Webpack</b>, <b>Bootstrap</b> and
        some other packages.
      </p>
      <p>This test app has simple auth impementation. To see the dashboard you will need to login.
         Use login: login and password: password to sign in.
      </p>
      <p>
        Now click on login menu item in top menu.
      </p>
    </Panel>
  </Grid>
);
