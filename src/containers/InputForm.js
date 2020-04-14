import React, { Component } from 'react';
import FormsComponent from '../components/FormsComponent.js';

class InputForm extends Component {
	constructor() {
		super();
		this.state = {
			dataPopulation: '',
			timeToElapse: '',
			reportedCases: '',
			totalHospitalBeds: '',
			periodType: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" 
    ? this.setState({ [name]: checked }) 
    : this.setState({ [name]: value })
  }
  	
	render() {
		return(
			<FormsComponent 
			data={ this.state }
			handleChange={ this.handleChange} />
		)}
	}

export default InputForm;