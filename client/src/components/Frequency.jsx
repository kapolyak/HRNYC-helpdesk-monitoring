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
    console.log('FREQ RENDER PROPS', this.props.data);

    this.props.data.forEach((cohort) => {
      console.log('COHORT IN FOR EACH', cohort)

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

    console.log('FINAL DATA', finalData);
    
    // let chartData = [{"name": "HRNYC19", "data": finalCount}];

    return (
      <div>
        <h1>HRNYC Helpdesk Frequency</h1>
        {/* <LineChart data={sampleData}/> */}
				<LineChart 
					xtitle="Week #" 
					ytitle="# of Helpdesk Requests" 
					data={finalData}
					width='100%'
					height='600px'
				/>
      </div>
    )
  }
};

module.exports = {
  Frequency
};