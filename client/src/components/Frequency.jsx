const React = require('react');
const { LineChart, PieChart } = require('react-chartkick');
const ReactChartkick = require('react-chartkick').default;
const Highcharts = require('highcharts');

ReactChartkick.addAdapter(Highcharts);

class Frequency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  render() {

    var sampleData = [{"name": "A", "data": [["01", 3], ["02", 4], ["03", 5]]}];
		console.log('sample data: ', sampleData);

    return (
      <div>
        <h1>HRNYC Helpdesk Frequency</h1>
        <LineChart data={sampleData}/>
				{/* <LineChart 
					xtitle="Hour" 
					ytitle="# of Trains" 
					data={data}
					width='80%'
					height='600px'
				/> */}
      </div>
    )
  }
};

module.exports = {
  Frequency
};