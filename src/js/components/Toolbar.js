'use strict';

import React from 'react';

export default class Toolbar extends React.Component {

  render() {
    return (
      <div className="row toolbar-pf">
        <div className="col-sm-12">
          <form className="toolbar-pf-actions">
            <div className="form-group toolbar-pf-filter">
              <label className="sr-only" htmlFor="filter">Name</label>
              <div className="input-group">
                <div className="input-group-btn">
                  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span className="caret"></span></button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
                <input type="text" className="form-control" id="filter" placeholder="Filter By Name..."/>
              </div>
            </div>
            <div className="form-group">
              <div className="dropdown btn-group">
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Name <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <button className="btn btn-link" type="button">
                <span className="fa fa-sort-alpha-asc"></span>
              </button>
            </div>
            <div className="form-group">
              <button className="btn btn-default" type="button">Action</button>
              <button className="btn btn-default" type="button">Action</button>
              <div className="dropdown btn-group  dropdown-kebab-pf">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebab" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span className="fa fa-ellipsis-v"></span>
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownKebab">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>

            </div>
            <div className="toolbar-pf-action-right">
              <div className="form-group toolbar-pf-find">
                <button className="btn btn-link btn-find" type="button">
                  <span className="fa fa-search"></span>
                </button>
                <div className="find-pf-dropdown-container">
                  <input type="text" className="form-control" id="find" placeholder="Find By Keyword..."/>
                    <div className="find-pf-buttons">
                      <span className="find-pf-nums">1 of 3</span>
                      <button className="btn btn-link" type="button">
                        <span className="fa fa-angle-up"></span>
                      </button>
                      <button className="btn btn-link" type="button">
                        <span className="fa fa-angle-down"></span>
                      </button>
                      <button className="btn btn-link btn-find-close" type="button">
                        <span className="pficon pficon-close"></span>
                      </button>
                    </div>
                </div>
              </div>
              <div className="form-group toolbar-pf-view-selector">
                <ul className="list-inline">
                  <li><a href="#" title="Table View"><i className="fa fa-table"></i></a></li>
                  <li><a href="card.html" title="Card View"><i className="fa fa-th"></i></a></li>
                  <li className="active"><a href="#" title="List View"><i className="fa fa-th-list"></i></a></li>
                </ul>
              </div>
            </div>
          </form>
          <div className="row toolbar-pf-results">
            <div className="col-sm-12">
              <h5>40 Results</h5>
              <p>Active filters:</p>
              <ul className="list-inline">
                <li>
                <span className="label label-info">
                  Name: nameofthething
                  <a href="#"><span className="pficon pficon-close"></span></a>
                </span>
                </li>
                <li>
                <span className="label label-info">
                  Name: nameofthething
                  <a href="#"><span className="pficon pficon-close"></span></a>
                </span>
                </li>
                <li>
                <span className="label label-info">
                  Name: nameofthething
                  <a href="#"><span className="pficon pficon-close"></span></a>
                </span>
                </li>
              </ul>
              <p><a href="#">Clear All Filters</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}