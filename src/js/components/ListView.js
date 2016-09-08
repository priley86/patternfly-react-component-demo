'use strict';

import React from 'react';
import Toolbar from './Toolbar';

export default class ListView extends React.Component {

  runSetup() {
    $("input[type='checkbox']").change(function (e) {
      if ($(this).is(":checked")) {
        $(this).closest('.list-group-item').addClass("active");
      } else {
        $(this).closest('.list-group-item').removeClass("active");
      }
    });

    // Row navigation to contents/details page
    $(".list-group-item").click(function(e){
      var target = e.target;
      //check if clicked element is a div, and not <a>, button or input
      if($(target).is('div')) {
        window.location = $(this).data("link");
      }
    });
  }

  componentDidMount() {
    this.runSetup();
  }


  render() {
    return (
      <div className="container-fluid">
        <Toolbar/>

        <div className="row">
          <div className="col-md-12">

            <div className="list-group list-view-pf">

              <div data-link="details.html" className="list-group-item">
                <a href="details.html" className="list-group-item-link"></a>
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div data-link="details.html" className="list-group-item">
                <div className="list-view-pf-checkbox">
                  <input type="checkbox"/>
                </div>
                <div className="list-view-pf-actions">
                  <button className="btn btn-default">Action</button>
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownKebabRight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownKebabRight">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="list-view-pf-main-info">
                  <div className="list-view-pf-left">
                    <span className="fa fa-plane list-view-pf-icon-sm"></span>
                  </div>
                  <div className="list-view-pf-body">
                    <div className="list-view-pf-description">
                      <div className="list-group-item-heading">
                        Event One
                      </div>
                      <div className="list-group-item-text">
                        The following snippet of text is <a href="#">rendered as link text</a>.
                      </div>
                    </div>
                    <div className="list-view-pf-additional-info">
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-screen"></span>
                        <strong>8</strong> Hosts
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-cluster"></span>
                        <strong>8</strong> Clusters
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-container-node"></span>
                        <strong>18</strong> Nodes
                      </div>
                      <div className="list-view-pf-additional-info-item">
                        <span className="pficon pficon-image"></span>
                        <strong>4</strong> Images
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
