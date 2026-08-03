import Projects from 'app/projects/projects';
import { Fragment } from 'react';
import Header from '../components/header';

export const metadata = {
	title: 'Projects',
	description: 'My Projects - Eren Duman',
};

export default function Page() {
	return (
		<Fragment>
			<Header title='Projects' />
			<div className='space-y-2 md:space-y-5 '>
				<p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
					Some of the projects I've enjoyed building along the way.
				</p>
			</div>
			<Projects />
		</Fragment>
	);
}
