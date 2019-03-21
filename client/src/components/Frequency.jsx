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

    console.log(this.state.data)

    var sampleData = [{"name": "A", "data": [["01", 3], ["02", 4], ["03", 10], ["04", 12], ["05", 8], ["06", 7], ["07", 3], ["08", 4], ["09", 5], ["10", 3], ["11", 4], ["12", 5], ["13", 5]]}, {"name": "B", "data": [["01", 8], ["02", 1], ["03", 2]]}];
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