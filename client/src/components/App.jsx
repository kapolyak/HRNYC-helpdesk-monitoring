const React = require('react');
const gql = require('graphql-tag');
const { Query } = require("react-apollo");
const { Leaderboard } = require('./Leaderboard.jsx');
const { Frequency } = require('./Frequency.jsx');
const { Header } = require('./Header.jsx');

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

const getHelpdeskCount = gql`
  query countPerDay($cohort_number: String) {
    countPerDay(cohort_number: $cohort_number) {
      date,
      count
    }
  }
`;

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let loader = [
      `Loading...`
    ];

    let cohorts = ['18', '19', '20'];
    var allData = [];

    return (
      <div>
        <Header />
        <div className="main">
          <Query query={getAllStaff}>
            {({ loading, error, data }) => {
              if (loading) {
                return <div className="loader">{loader[Math.floor(Math.random() * 7)]}</div>;
              }
              if (error) {
                return <p>Error :(</p>;
              }

              return (
                <div className="leaderboard">
                  <Leaderboard allStaff={data.allStaff}/>
                </div>
              )
            }}
          </Query>
          <br />
          <Query query={getHelpdeskCount} variables={{cohort_number: cohorts[0]}}>
          {({ loading, error, data }) => {
              if (loading) {
                return <div className="loader">{loader[Math.floor(Math.random() * 7)]}</div>;
              }
              if (error) {
                return <p>Error :(</p>;
              } 
              if (Object.keys(data).length > 0) {
                allData.push([cohorts[0], data]);
              }
              return (
                <React.Fragment>
                  <Query query={getHelpdeskCount} variables={{cohort_number: cohorts[1]}}>
                    {({error, data }) => {
                      if (error) {
                        return <p>Error :(</p>;
                      }
                      if (Object.keys(data).length > 0) {
                        allData.push([cohorts[1], data]);
                      }

                      return (
                        <React.Fragment>
                          <Query query={getHelpdeskCount} variables={{cohort_number: cohorts[2]}}>
                            {({error, data }) => {
                              if (error) {
                                return <p>Error :(</p>;
                              }
                              if (Object.keys(data).length > 0) {
                                allData.push([cohorts[2], data]);
                              }
                              
                              if (allData.length >= cohorts.length) {
                                return (
                                  <div className="frequency">
                                    <Frequency data={allData}/>
                                  </div>
                                )
                              } else {
                                return (
                                  <div>ERROR</div>
                                )
                              }
                            }}
                          </Query>
                        </React.Fragment>
                      )
                    }}
                  </Query>
                </React.Fragment>
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
