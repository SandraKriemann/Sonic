/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DashboardPage.scss';

function ProjectItem({item}) {
  return (
    <div>{item}</div>
  );
}

function ProjectList () {
  const projects = [1,2,3,4];

  return (
    <div>
      {projects.map(itm =>
        <ProjectItem item={itm}/>
      )}
    </div>
  );
}

function DashboardPage({children}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div>
          <ProjectList/>
        </div>
        <div>
          {children && {...children}}
        </div>
      </div>
    </div>
  );
}

export default withStyles(DashboardPage, s);
