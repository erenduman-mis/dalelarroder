import GithubContributions from '../components/github-contributions/github-contributions';
import Header from '../components/header';

export const metadata = {
	title: 'Stats',
	description: 'GitHub activity and development journey.',
};

export default function StatsPage() {
	return (
		<div>
			<Header title='Stats' />

			<div className='mb-8'>
				<p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
					A quick overview of my GitHub activity and development journey.
				</p>
			</div>

			<section>
				<GithubContributions />
			</section>
		</div>
	);
}
