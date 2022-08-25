import {Component} from "react";
import Image from "next/image";
import Charlemagne from "../public/matthew.png"

const charleWidth: number = Charlemagne.width / 4
const charleHeight: number = Charlemagne.height / 4

class ConditionalWrapper extends Component<{ children: any, condition: any }> {
	render() {
		let {children, condition} = this.props;
		return condition ? (
			<>
				{children}
				<div className="items-center justify-center flex">

				</div>

			</>
		) : (
			children
		)
	}
}

export default ConditionalWrapper