const React = require('react');
const ReactTable = require('react-table').default;

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.allStaff
    };
  }

  render() {
    let data = this.props.allStaff;

    const columns = [{
      Header: 'Name',
      accessor: 'staff_name',
      maxWidth: 200
    }, {
      Header: 'Count',
      accessor: 'helpdeskCount',
      maxWidth: 150
    }, {
      Header: 'Avg (sec)', 
      accessor: 'helpdeskAvgClaimTime',
      maxWidth: 150
    }]

    return (
      <React.Fragment>
        <h2>Leaderboard</h2>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={data.length}
          className="-highlight"
          showPagination={false}
          loading={false}
          colum={{
            show:true, 
            minWidth: 70
          }}
        />
      </React.Fragment>
    )
  }
};

module.exports = {
  Leaderboard
};