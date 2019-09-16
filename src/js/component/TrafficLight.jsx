import React from "react";
import ReactDOM from "react-dom";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			lightOn: null
		};
	}
	render() {
		let selectRed = "";
		if (this.state.lightOn === "red") selectRed = "selected";
		let selectYellow = "";
		if (this.state.lightOn === "yellow") selectYellow = "selected";
		let selectGreen = "";
		if (this.state.lightOn === "green") selectGreen = "selected";

		return (
			<div>
				<div id="handle" />
				<div id="main">
					<div
						className={"red light " + selectRed}
						onClick={() => this.setState({ lightOn: "red" })}
					/>
					<div
						className={"yellow light " + selectYellow}
						onClick={() => this.setState({ lightOn: "yellow" })}
					/>
					<div
						className={"green light " + selectGreen}
						onClick={() => this.setState({ lightOn: "green" })}
					/>
				</div>
			</div>
		);
	}
}
