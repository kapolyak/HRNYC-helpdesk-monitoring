const React = require('react');
const { LineChart, PieChart } = require('react-chartkick');
const ReactChartkick = require('react-chartkick').default;
const Highcharts = require('highcharts');

ReactChartkick.addAdapter(Highcharts);

class Frequency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {

    var counts = this.state.data.countPerDay;
    console.log('COUNTS', counts);

    let finalCount = [];
    counts.forEach((day) => {
      finalCount.push([day.date, day.count])
    })  
    
    let chartData = [{"name": "HRNYC19", "data": finalCount}];
    console.log('CHART DATA', chartData);

    return (
      <div>
        <h1>HRNYC Helpdesk Frequency</h1>
        {/* <LineChart data={sampleData}/> */}
				<LineChart 
					xtitle="Week #" 
					ytitle="# of Helpdesk Requests" 
					data={chartData}
					width='80%'
					height='600px'
				/>
      </div>
    )
  }
};

module.exports = {
  Frequency
};