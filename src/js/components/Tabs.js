'use strict';

import React from 'react';
import Cards from './Cards';
import ListView from './ListView';
import EmptyState from './EmptyState';

export default class Tabs extends React.Component {

  componentDidMount() {
    let pfTabs = this.refs.tabs;
  }

  render() {
    return (
      <pf-tabs ref="tabs"> 
        <pf-tab title={"Dashboard"} active={"true"}> 
          <Cards/> 
        </pf-tab>
        <pf-tab title={"List View"}>
          <ListView />
        </pf-tab>
        <pf-tab title={"Empty State"}>
          <EmptyState />
        </pf-tab>
      </pf-tabs>
    );
  }
}