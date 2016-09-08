'use strict';

import React from 'react';

export default class Cards extends React.Component {

  componentDidMount() {
    //render all chart types/blocks
    this.renderChart2();
    this.renderChart3();
    this.renderChart5();

    //run matchHeight jquery plugin
    this.matchHeight();
  }

  renderChart2() {
    var donutChartConfig = jQuery().c3ChartDefaults().getDefaultDonutConfig('A');
    donutChartConfig.bindto = '#chart-pf-donut-1';
    donutChartConfig.data = {
      type: "donut",
      columns: [
        ["Used", 95],
        ["Available", 5]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    };
    donutChartConfig.color = {
      pattern: ["#cc0000","#D1D1D1"]
    };
    donutChartConfig.tooltip = {
      contents: function (d) {
        return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
          Math.round(d[0].ratio * 100) + '%' + ' MHz ' + d[0].name +
          '</span>';
      }
    };
    var chart1 = c3.generate(donutChartConfig);

    var donutChartTitle = d3.select("#chart-pf-donut-1").select('text.c3-chart-arcs-title');
    donutChartTitle.text("");
    donutChartTitle.insert('tspan').text("950").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
    donutChartTitle.insert('tspan').text("MHz Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

    var sparklineChartConfig = jQuery().c3ChartDefaults().getDefaultSparklineConfig();
    sparklineChartConfig.bindto = '#chart-pf-sparkline-1';
    sparklineChartConfig.data = {
      columns: [
        ['%', 10, 50, 28, 20, 31, 27, 60, 36, 52, 55, 62, 68, 69, 88, 74, 88, 95],
      ],
      type: 'area'
    };
    var chart2 = c3.generate(sparklineChartConfig);
  }

  renderChart3() {
    var donutChartConfig = jQuery().c3ChartDefaults().getDefaultDonutConfig('A');
    donutChartConfig.bindto = '#chart-pf-donut-2';
    donutChartConfig.data = {
      type: "donut",
      columns: [
        ["Used", 41],
        ["Available", 59]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    };
    donutChartConfig.color = {
      pattern: ["#3f9c35","#D1D1D1"]
    };
    donutChartConfig.tooltip = {
      contents: function (d) {
        return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
          Math.round(d[0].ratio * 100) + '%' + ' GB ' + d[0].name +
          '</span>';
      }
    };
    var chart3 = c3.generate(donutChartConfig);

    var donutChartTitle = d3.select("#chart-pf-donut-2").select('text.c3-chart-arcs-title');
    donutChartTitle.text("");
    donutChartTitle.insert('tspan').text("176").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
    donutChartTitle.insert('tspan').text("GB Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

    var sparklineChartConfig = jQuery().c3ChartDefaults().getDefaultSparklineConfig();
    sparklineChartConfig.bindto = '#chart-pf-sparkline-2';
    sparklineChartConfig.data = {
      columns: [
        ['%', 35, 36, 20, 30, 31, 22, 44, 36, 40, 41, 55, 52, 48, 48, 50, 40, 41],
      ],
      type: 'area'
    };
    var chart4 = c3.generate(sparklineChartConfig);
  }

  renderChart5() {
    var donutChartConfig = jQuery().c3ChartDefaults().getDefaultDonutConfig('A');
    donutChartConfig.bindto = '#chart-pf-donut-3';
    donutChartConfig.data = {
      type: "donut",
      columns: [
        ["Used", 85],
        ["Available", 15]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    };
    donutChartConfig.color = {
      pattern: ["#EC7A08","#D1D1D1"]
    };
    donutChartConfig.tooltip = {
      contents: function (d) {
        return '<span className="donut-tooltip-pf" style="white-space: nowrap;">' +
          Math.round(d[0].ratio * 100) + '%' + ' Gbps ' + d[0].name +
          '</span>';
      }
    };
    var chart5 = c3.generate(donutChartConfig);

    var donutChartTitle = d3.select("#chart-pf-donut-3").select('text.c3-chart-arcs-title');
    donutChartTitle.text("");
    donutChartTitle.insert('tspan').text("1100").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
    donutChartTitle.insert('tspan').text("Gbps Used").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

    var sparklineChartConfig = jQuery().c3ChartDefaults().getDefaultSparklineConfig();
    sparklineChartConfig.bindto = '#chart-pf-sparkline-3';
    sparklineChartConfig.data = {
      columns: [
        ['%', 60, 55, 70, 44, 31, 67, 54, 46, 58, 75, 62, 68, 69, 88, 74, 88, 85],
      ],
      type: 'area'
    };
    var chart6 = c3.generate(sparklineChartConfig);
  }

  matchHeight() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
  }


  render() {
    return (
      <div className="container-fluid container-cards-pf">
        <div className="row row-cards-pf">
          <div className="col-xs-6 col-md-2">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">0</span> Ipsum
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-2">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">20</span> Amet</a>
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
                  <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-warning-triangle-o"></span>1</a></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-2">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">9</span> Adipiscing</a>
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><span className="pficon pficon-ok"></span></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-2">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">0</span> Ipsum
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span className="pficon pficon-add-circle-o"></span></a></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-2">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">20</span> Amet</a>
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-error-circle-o"></span>4</a></span>
                  <span className="card-pf-aggregate-status-notification"><a href="#"><span className="pficon pficon-warning-triangle-o"></span>1</a></span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-2">
            <div className="card-pf card-pf-accented card-pf-aggregate-status">
              <h2 className="card-pf-title">
                <a href="#"><span className="fa fa-shield"></span><span className="card-pf-aggregate-status-count">9</span> Adipiscing</a>
              </h2>
              <div className="card-pf-body">
                <p className="card-pf-aggregate-status-notifications">
                  <span className="card-pf-aggregate-status-notification"><span className="pficon pficon-ok"></span></span>
                </p>
              </div>
            </div>
          </div>
        </div>




        <div className="row row-cards-pf">
          <div className="col-md-8">
            <div className="card-pf card-pf-utilization">
              <div className="card-pf-heading">
                <p className="card-pf-heading-details">Last 30 days</p>
                <h2 className="card-pf-title">
                  Utilization
                </h2>
              </div>
              <div className="card-pf-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h3 className="card-pf-subtitle">CPU</h3>
                    <p className="card-pf-utilization-details">
                      <span className="card-pf-utilization-card-details-count">50</span>
                     <span className="card-pf-utilization-card-details-description">
                       <span className="card-pf-utilization-card-details-line-1">Available</span>
                       <span className="card-pf-utilization-card-details-line-2">of 1000 MHz</span>
                     </span>
                    </p>
                    <div id="chart-pf-donut-1"></div>
                    <div className="chart-pf-sparkline" id="chart-pf-sparkline-1"></div>
                    <script>

                    </script>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h3 className="card-pf-subtitle">Memory</h3>
                    <p className="card-pf-utilization-details">
                      <span className="card-pf-utilization-card-details-count">256</span>
                     <span className="card-pf-utilization-card-details-description">
                       <span className="card-pf-utilization-card-details-line-1">Available</span>
                       <span className="card-pf-utilization-card-details-line-2">of 432 GB</span>
                     </span>
                    </p>
                    <div id="chart-pf-donut-2"></div>
                    <div className="chart-pf-sparkline" id="chart-pf-sparkline-2"></div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <h3 className="card-pf-subtitle">Network</h3>
                    <p className="card-pf-utilization-details">
                      <span className="card-pf-utilization-card-details-count">200</span>
                     <span className="card-pf-utilization-card-details-description">
                       <span className="card-pf-utilization-card-details-line-1">Available</span>
                       <span className="card-pf-utilization-card-details-line-2">of 1300 Gbps</span>
                     </span>
                    </p>
                    <div id="chart-pf-donut-3"></div>
                    <div className="chart-pf-sparkline" id="chart-pf-sparkline-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-xs-12 col-md-4">
            <div className="card-pf">
              <div className="card-pf-heading">
                <h2 className="card-pf-title">
                  Top Utilized Clusters
                </h2>
              </div>
              <div className="card-pf-body">
                <div className="progress-description">
                  RHOS6-Controller
                </div>
                <div className="progress progress-label-top-right">
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}  data-toggle="tooltip" title="95% Used">
                    <span><strong>190.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style={{width: '5%'}} data-toggle="tooltip" title="5% Available">
                    <span className="sr-only">5% Available</span>
                  </div>
                </div>
                <div className="progress-description">
                  CFMEQE-Cluster
                </div>
                <div className="progress progress-label-top-right">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}  data-toggle="tooltip" title="50% Used">
                    <span><strong>100.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}} data-toggle="tooltip" title="50% Available">
                    <span className="sr-only">50% Available</span>
                  </div>
                </div>
                <div className="progress-description">
                  RHOS-Undercloud
                </div>
                <div className="progress progress-label-top-right">
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}  data-toggle="tooltip" title="70% Used">
                    <span><strong>140.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: '30%'}} data-toggle="tooltip" title="30% Available">
                    <span className="sr-only">30% Available</span>
                  </div>
                </div>
                <div className="progress-description">
                  RHEL6-Controller
                </div>
                <div className="progress progress-label-top-right">
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="76.5" aria-valuemin="0" aria-valuemax="100" style={{width: '76.5%'}}  data-toggle="tooltip" title="76.5% Used">
                    <span><strong>153.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div className="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="23.5" aria-valuemin="0" aria-valuemax="100" style={{width: '23.5%'}} data-toggle="tooltip" title="23.5% Available">
                    <span className="sr-only">23.5% Available</span>
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
