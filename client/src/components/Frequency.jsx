const React = require('react');
const { LineChart, PieChart } = require('react-chartkick');
const ReactChartkick = require('react-chartkick').default;
const Highcharts = require('highcharts');

ReactChartkick.addAdapter(Highcharts);

class Frequency extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let finalData = [];
    this.props.data.forEach((cohort) => {

      let name = `HRNYC${cohort[0]}`
      let cohortData = {"name": name, "data": []};
      let cohortArray = [];

      cohort[1].countPerDay.forEach((week) => {
        cohortArray.push([week.date, week.count]);
      })
      cohortData.data = cohortArray;
      finalData.push(cohortData);
    })

    // finalData.pop();

    return (
      <div className="frequency">
        <h1>HRNYC Helpdesk Frequency</h1>
				<LineChart 
					xtitle="Week #" 
					ytitle="# of Helpdesk Requests" 
					data={finalData}
					width='100%'
					height='550px'
				/>
      </div>
    )
  }
};

module.exports = {
  Frequency
};