const React = require('react');
const ReactTable = require('react-table').default;

const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 10,
  expanded: {},
  resized: [],
  filtered: []
});

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this);
    this.state = {
      data: this.props.allStaff
    };
  }

  sort(staff) {
    staff.sort((a, b) => {
      if (a.helpdeskCount > b.helpdeskCount) {
        return -1;
      } else {
        return 1;
      }
    });
    return staff;
  }

  render() {
    let sorted = this.sort(this.props.allStaff)
    let data = this.props.allStaff;
    console.log('data', data)
    // console.log(sorted);

    const columns = [{
      Header: 'Name',
      accessor: 'staff_name' // String-based value accessors!
    }, {
      Header: 'Count',
      accessor: 'helpdeskCount',
    }, {
      Header: 'Avg Claim Time', 
      accessor: 'helpdeskAvgClaimTime',
    }]

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          showPagination={false}
          loading={false}
          colum={{show:true}}
        />
        <h1>LEADERBOARD</h1>
            {sorted.map((staff) => (
              <div key={staff.staff_slack_id}>
                <p>{staff.staff_name + ': '} <b>{staff.helpdeskCount}, {staff.helpdeskAvgClaimTime}</b></p>
              </div>
            ))
            }
      </div>
    )
  }
};

module.exports = {
  Leaderboard
};