import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { defaultCharacters } from '../constants/defaultCharacters';
import { Link } from "gatsby"

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.transformData = this.transformData.bind(this); 
  }

  transformData(data) {
    let arr = data.results;
    for (let i = 0, l = arr.length; i < l; i++) {
      if (!arr[i].type) arr[i].type = ' ';
      arr[i].details = <Link to="/details" data={{ id: arr[i].id}}>Get Details</Link>
    }
    data.results = arr;
    return data;
  }

  render() {
    const { data } = this.props;
    const transformedData = this.transformData(data);

    const tableData = {
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 270
        },
        {
          label: 'Status',
          field: 'status',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Gender',
          field: 'gender',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Species',
          field: 'species',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Type',
          field: 'type',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Details',
          field: 'details',
          sort: 'asc',
          width: 100
        },
      ],
      rows: transformedData.results
    };

    return (
      <MDBDataTable
        striped
        bordered
        small
        data={tableData}
      />
    );
  }

}

export default DataTable;