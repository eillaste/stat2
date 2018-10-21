import React, { Component } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Detail from './components/Detail';
import Header from './components/Header';
import styled from 'styled-components';

class App extends Component {
	state = {
		data1: [],
		data2: [],
		data3: [],
		data4: [],
		data5: [],
		subject1: '',
		subject2: '',
		subject3: '',
		subject4: '',
		subject5: '',
		width: 600,
		height: 300
	};
	// Simulate database call
	getData = () => {
		axios.get('db.json').then((response) =>
			this.setState({
				data1: response.data.data1.data,
				subject1: response.data.data1.subject,
				data2: response.data.data2.data,
				subject2: response.data.data2.subject,
				data3: response.data.data3.data,
				subject3: response.data.data3.subject,
				data4: response.data.data4.data,
				subject4: response.data.data4.subject,
				data5: response.data.data5.data,
				subject5: response.data.data5.subject
			})
		);
	};

	componentDidMount() {
		this.getData();
	}

	render() {
		const {
			width,
			height,
			data1,
			data2,
			data3,
			data4,
			data5,
			subject2,
			subject1,
			subject3,
			subject4,
			subject5
		} = this.state;

		const Wrapper = styled.div`
			text-align: right;
			color: #003950;
			font-size: 1rem;
		`;

		return (
			<Wrapper>
				<Header />

				<Router>
					<Detail
						subject={subject1}
						data={data1}
						width={width}
						height={height}
						path={'/Keskmine-brutokuupalk'}
					/>
					<Detail subject={subject5} data={data5} width={width} height={height} path={'/Rahvastik'} />
					<Detail subject={subject3} data={data3} width={width} height={height} path={'/Tootuse-maar'} />
					<Detail
						subject={subject4}
						data={data4}
						width={width}
						height={height}
						path={'/Tarbijahinnaindeks'}
					/>
					<Detail
						subject={subject2}
						data={data2}
						width={width}
						height={height}
						path={'/SKP-jooksevhindades'}
					/>
				</Router>
			</Wrapper>
		);
	}
}

export default App;
