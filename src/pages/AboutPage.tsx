import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
	const history = useHistory()

	return (
		<>
			<h1>About</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis inventore dolores soluta quos qui ullam perspiciatis at quis quibusdam laborum!
			</p>
			<button 
				className="btn"
				onClick={() => history.push('/')}
			>Return</button>
		</>
	)
}
