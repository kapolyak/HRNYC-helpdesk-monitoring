const React = require('react');
const ReactTable = require('react-table').default;

// const makeDefaultState = () => ({
//   sorted: [],
//   page: 0,
//   pageSize: 10,
//   expanded: {},
//   resized: [],
//   filtered: []
// });

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
      maxWidth: 300
    }, {
      Header: 'Count',
      accessor: 'helpdeskCount',
      maxWidth: 100
    }, {
      Header: 'Avg (sec)', 
      accessor: 'helpdeskAvgClaimTime',
      maxWidth: 100
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