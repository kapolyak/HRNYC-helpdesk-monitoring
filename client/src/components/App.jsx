let React = require('react');
let gql = require('graphql-tag');
let { Query } = require("react-apollo");

const getAllStaff = gql`
{
  allStaff {
    staff_name
    staff_slack_id
    helpdeskCount
  }
}
`;

class App extends React.Component {

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
    let loader = [
      `We're buying servers!`,
      `What is it, Monday?`,
      `AkhMm, great great`,
      `Sieze the means of production!`,
      `Is this a bit?`
    ];

    return (
      <div>
        <h1>LEADERBOARD</h1>
        <Query query={getAllStaff}>
          {({ loading, error, data }) => {
            if (loading) return <h2>{loader[Math.floor(Math.random()* 4)]}</h2>;
            if (error) return <p>Error :(</p>;
            let sorted = this.sort(data.allStaff)
            return sorted.map((staff) => (
              <div key={staff.staff_slack_id}>
                <p>{staff.staff_name + ': '} <b>{staff.helpdeskCount}</b></p>
              </div>
            ));
          }}
        </Query>
      </div>
    )
  }
};

module.exports = {
  App
};