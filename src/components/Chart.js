import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';

class Chart extends Component {
	state = { show: true };
	handleClick = this.handleClick.bind(this);
	handleClick() {
		this.setState({ show: !this.state.show });
	}
	render() {
		const { width, data, subject } = this.props;
		const names = data.map(() => 'aasta');
		const years = data.map((d) => d['aasta']);
		const Ikvartal = data.map((d) => d['I kvartal']);
		const IIkvartal = data.map((d) => d['II kvartal']);
		const IIIkvartal = data.map((d) => d['III kvartal']);
		const IVkvartal = data.map((d) => d['IV kvartal']);
		const mehedjanaised = data.map((d) => d['mehed ja naised']);
		const mehed = data.map((d) => d['mehed']);
		const naised = data.map((d) => d['naised']);
		var result = {};

		// FUNCTIONS

		names.forEach((name, i) => (result[name] = years[i]));
		let chartdata = [];

		function createDataArray() {
			for (let i = 0; i < names.length; i++) {
				let obj = {};
				obj.aasta = years[i];
				obj['I kvartal'] = Ikvartal[i];
				obj['II kvartal'] = IIkvartal[i];
				obj['III kvartal'] = IIIkvartal[i];
				obj['IV kvartal'] = IVkvartal[i];
				obj['mehed ja naised'] = mehedjanaised[i];
				obj['mehed'] = mehed[i];
				obj['naised'] = naised[i];
				chartdata.push(obj);
			}
		}
		createDataArray();

		// STYLES

		const Button = styled.button`
			border: none;
			margin: 0.625rem;
			padding: 0.8125rem;
			width: 11.25rem;
			background-color: rgba(255, 255, 255, 0.1);
			color: #ffb127;
			box-shadow: 0rem 0rem 0.9375rem rgba(0, 0, 0, 0.1);
			transition: all 0.3s ease 0s;
			font-size: 1.063rem;
			margin-right: 1.25rem;
			border-radius: 0.1875rem;

			&:focus {
				outline-color: #ffb127;
			}

			&:hover {
				box-shadow: 0rem 0.5rem 1.25rem rgba(0, 0, 0, 0.1);
				cursor: pointer;
				transform: translateY(-0.1875rem);
			}
		`;

		const Graph = styled.section`@media screen and (max-width: 50.000em) {margin-left: -1.375rem;}`;
		const Title = styled.h1`
			color: white;
			font-size: 1.875rem;
			@media screen and (max-width: 50.000em) {
				font-size: 1.5rem;
			}
		`;

		return (
			<React.Fragment>
				<Fade opposite collapse when={this.state.show}>
					<Graph>
						<Title>{subject}</Title>
						<ResponsiveContainer width="100%" height={width * 0.75}>
							<LineChart
								alt={`Graafik - ${subject}`}
								data={chartdata}
								subject={subject}
								margin={{ top: 5, right: 10, bottom: 5, left: 10 }}
								style={{ textAlign: 'center' }}
							>
								<Line type="monotone" dataKey="I kvartal" stroke="#ffb127" />
								<Line type="monotone" dataKey="II kvartal" stroke="#ffb127" />
								<Line type="monotone" dataKey="III kvartal" stroke="#ffb127" />
								<Line type="monotone" dataKey="IV kvartal" stroke="#ffb127" />
								<Line type="monotone" dataKey="mehed ja naised" stroke="#ffb127" />
								<Line type="monotone" dataKey="mehed" stroke="#ffb127" />
								<Line type="monotone" dataKey="naised" stroke="#ffb127" />
								<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
								<XAxis dataKey="aasta" stroke="#fff" />
								<YAxis stroke="#fff" />
								<Tooltip />
							</LineChart>
						</ResponsiveContainer>
					</Graph>
				</Fade>
				<Button type="button" role="button" onClick={this.handleClick} tabIndex="0">
					{this.state.show ? 'Peida' : 'Näita'}
				</Button>
			</React.Fragment>
		);
	}
}

export default Chart;
