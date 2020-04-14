import React from 'react';

const FormsComponent = (props) => {
	return(
		<main>
			<header>
				<form>
					<h1>Information to be processed</h1>
					<h3>Please make sure to check your<br />input below before submitting</h3>
					<label>Population:</label>
					<input 
					type="number"
					min="0" 
					name="dataPopulation" 
					value={ props.data.datPopulation } 
					placeholder="Total Population" 
					onChange={ props.handleChange }
					id="data-population"
					className="data-population" 	
					/>
					<br /><br />
					<label>Time To Elapse</label>
					<input 
						type="number"
						min="0" 
						name="timeToElapse" 
						value={ props.data.timeToElapse } 
						placeholder="Time To Elapse" 
						onChange={ props.handleChange }
						id="data-time-to-elapse"
						className="data-time-to-elapse" 	
					/>
					<br /><br />
					<label>Reported Cases</label>
					<input 
						type="number"
						min="0" 
						name="reportedCases" 
						value={ props.data.reportedCases } 
						placeholder="Reported Cases" 
						onChange={ props.handleChange }
						id="data-reported-cases"
						className="data-reported-cases"	
					/>
					<br /><br />
					<label>Total Hospital Beds</label>
					<input 
						type="number" 
						min="0" 
						name="totalHospitalBeds" 
						value={ props.data.totalHospitalBeds } 
						placeholder="Total Hospital Beds" 
						onChange={ props.handleChange }
						id="data-total-hospital-beds"
						className="data-total-hospital-beds"	
					/>
					<br /><br />
					<label>Period Type:</label>
		        <select 
		            value={ props.data.periodType }
		            onChange={ props.handleChange }
		            name="periodType"
		        >
		        	<option>--Select  one--</option>
	            <option value="days">Days</option>
	            <option value="weeks">Weeks</option>
	            <option value="months">months</option>
		        </select>
	        <br /><br />
	      	<button>Submit</button>
				</form>						
			</header>
      <hr />
      <div className="output">
	      <h2>Entered information:</h2>
	      <p>Population: { props.data.dataPopulation }</p>
	      <p>Time To Elapse: { props.data.timeToElapse }</p>
	      <p>Reported Cases: { props.data.reportedCases }</p>
	      <p>Total Hospital Beds: { props.data.totalHospitalBeds }</p>
	      <p>Period Type: { props.data.periodType }</p>
      </div>
    </main>
	)
}

export default FormsComponent;