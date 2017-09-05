import React from 'react'

export default class ThemedDecorations extends React.Component {

	render() {
		const newChild = React.Children.map(this.props.children, child => React.cloneElement(child, {className: this.props.theme}))

		return (
			<div>
				{newChild}
			</div>
		)
	}
}


// In the components/ThemedDecorations.js file, create a ThemedDecorations React component.
// This component renders out all of its children, while adding a className prop to every child.

// import React, { Component } from 'react'

// export default class ThemedDecorations extends Component {

// 	render() {

// 	const childrenWithTheme = React.Children.map(this.props.children, child => React.cloneElement(child, {className: this.props.theme}))

// 	return (
// 		<div>
// 		{childrenWithTheme}
// 		</div>
// 		)
// 	}
// }