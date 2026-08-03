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
					A quick overview of my GitHub activity, favorite technologies, and the
					projects I enjoy building.
				</p>
			</div>

			<section className='space-y-8'>
				<GithubContributions />

				<div className='grid gap-6 md:grid-cols-2'>
					<img
						src='https://github-readme-stats.vercel.app/api?username=erenduman-mis&show_icons=true&theme=transparent&hide_border=true'
						alt='GitHub Stats'
					/>

					<img
						src='https://github-readme-stats.vercel.app/api/top-langs/?username=erenduman-mis&layout=compact&theme=transparent&hide_border=true'
						alt='Top Languages'
					/>
				</div>

				<div>
					<h2 className='mb-4 text-xl font-semibold'>Currently Learning</h2>

					<div className='flex flex-wrap gap-3'>
						<span className='rounded-full border px-4 py-2'>Linux</span>

						<span className='rounded-full border px-4 py-2'>
							Windows Server
						</span>

						<span className='rounded-full border px-4 py-2'>
							Active Directory
						</span>

						<span className='rounded-full border px-4 py-2'>VMware</span>

						<span className='rounded-full border px-4 py-2'>Networking</span>

						<span className='rounded-full border px-4 py-2'>Cloud</span>
					</div>
				</div>
			</section>
		</div>
	);
}
