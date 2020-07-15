import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {AgGridReact} from 'ag-grid-react';
import {actions} from './actions/ip_task';
import {AllModules} from 'ag-grid-enterprise';
import { axios } from 'axios' ;
import { Route } from 'react-router-dom';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import "./toolbar.css";
import { IPNew } from "./NewIP/ipnew";


class IPTable extends Component {
  colDefs = [
    {headerName: "ip", field: "ip"},
    {headerName: "RG",field: "requestingGroup"},
    {headerName: "Actor",field: "Actor"},
    {headerName: "date start",field: "dateActive"}
  ];

  autoGroupColumnDef = {
    headerName: "IP",
    sort: 'asc',
    cellRendererParams: {
      suppressCount: true
    }
  };

  modules = AllModules;
  // componentDidMount () {
  //   axios.get('localhost:4000/ip')
  //     .then( response => {
  //       this.props.ips.
  //     })
  // }

  render() {
    return (
      <React.Fragment>
        <div className='Toolbar'>
          <header>
            <nav>
              <ul>
                
                <li><a href="/">home</a></li>
                <li><a href="/new">new ip</a></li>               
              </ul>
            </nav>
          </header>
          {
            <Route path="/" component={}
          }
        </div>
        <div id='myGrid'  style={{
          height: '500px',
          width: '1200px' }} className="ag-theme-alpine">
          <AgGridReact
            columnDefs={this.colDefs}
            rowData={this.props.ips}
            immutableData={true}
            getRowNodeId={(data) => data.ip}
            autoGroupColumnDef={this.autoGroupColumnDef}
            modules={this.modules}
            groupDefaultExpanded={-1}
            onFirstDataRendered={params => params.api.sizeColumnsToFit()}
            getContextMenuItems={this.getContextMenuItems}>
          </AgGridReact>
        </div>
      </React.Fragment>
    ) 
  }
  getContextMenuItems = (params) => {
    // const newActions = [{
    //   name: "New IP",
    //   action: () => this.props.actions.new(params.node.key)
    // }];

    const delActions = [{
      name: "Dele IP",
      action: () => this.props.actions.deleteIP(params.node.data.ip)
    }];
    return delActions;
  };
}

const mapStateToProps = (state) => ({
  ips: state.ips
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IPView);