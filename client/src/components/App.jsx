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
      `Not a Bolshevik trojan horse`
      // `AkhMm, sorry, choking on my meatstick`
    ];

    return (
      <div>
        <div className="main">
          <Query query={getAllStaff}>
            {({ loading, error, data }) => {
              if (loading) return <div className="loader">{loader[Math.floor(Math.random()* 4)]}</div>;
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