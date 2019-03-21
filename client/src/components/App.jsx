const React = require('react');
const gql = require('graphql-tag');
const { Query } = require("react-apollo");
const { Leaderboard } = require('./Leaderboard.jsx');
const { Frequency } = require('./Frequency.jsx');

// const cohort_number = 19;

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
  query countPerDat($cohort_number: String) {
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
      `We're buying servers!`,
      `What is it, Monday?`,
      `AkhMm, great great`,
      `Sieze the means of production!`,
      `Is this a bit?`,
      `Not a Bolshevik trojan horse`,
      `Can't buy a TV in the rain`
    ];

    let cohorts = ['18', '19'];
    var allData = [];

    return (
      <div>
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
                <React.Fragment>
                  <Leaderboard allStaff={data.allStaff}/>
                </React.Fragment>
              )
            }}
          </Query>
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
                      console.log('ALL DATA', allData);

                      if (allData.length === cohorts.length) {
                        return (
                          <Frequency data={allData}/>
                        )
                      } else {
                        console.log('CHECK THE RETURN');
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
        </div>
      </div>
    )
  }
};

module.exports = {
  App
};
