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
    console.log('data', data)

    const columns = [{
      Header: 'Name',
      accessor: 'staff_name' // String-based value accessors!
    }, {
      Header: 'Count',
      accessor: 'helpdeskCount',
    }, {
      Header: 'Avg Claim Time (sec)', 
      accessor: 'helpdeskAvgClaimTime',
    }]

    return (
      <div>
        <h1>HRNYC Helpdesk Leaderboard</h1>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={15}
          className="-striped -highlight"
          showPagination={false}
          loading={false}
          colum={{show:true}}
        />
      </div>
    )
  }
};

module.exports = {
  Leaderboard
};