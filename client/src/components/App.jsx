const React = require('react');
const gql = require('graphql-tag');
const { Query } = require("react-apollo");
const { Leaderboard } = require('./Leaderboard.jsx');

const getAllStaff = gql`
{
  allStaff {
    staff_name
    staff_slack_id
    helpdeskCount
    helpdeskAvgClaimTime
  }
}
`;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let loader = [
      `We're buying servers!`,
      `What is it, Monday?`,
      `AkhMm, great great`,
      `Sieze the means of production!`,
      `Is this a bit?`,
      `AkhMm, sorry, choking on my meatstick`
    ];

    return (
      <div>
        <h1>HR Help Desk App</h1>
        <div className="main">
          <Query query={getAllStaff}>
            {({ loading, error, data }) => {
              if (loading) return <h2>{loader[Math.floor(Math.random()* 4)]}</h2>;
              if (error) return <p>Error :(</p>;
              return (
              <Leaderboard allStaff={data.allStaff}/>
              )
            }}
          </Query>
        </div>
      </div>
    )
  }
};

module.exports = {
  App
};