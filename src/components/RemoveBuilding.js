import React from 'react';

class RemoveBuilding extends React.Component {
	render() {
		const { removeUpdate, selectedBuilding } = this.props;
		return (
			<div>
				<p>
					{' '}
					<button onClick={() => removeUpdate(selectedBuilding)}>
					<i>Click here to remove selected building</i>
					</button>
				</p>
			</div>
		);
	}
}

export default RemoveBuilding;
