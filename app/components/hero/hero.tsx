import classNames from 'classnames';
import Link from 'next/link';
import { merryWeather } from '../../fonts';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import SplashCursor from '../splash-cursor';

export default function Hero() {
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<SplashCursor
				containerClassName='min-h-svh w-screen'
				usePrimaryColors={true}
			>
				<div
					className={classNames('relative min-h-svh', merryWeather.className)}
				>
					<div className='absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14'>
						<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
							Welcome to my corner of the web.
						</h1>
						<section className='relative z-10'>
							<p className='text-base text-justify'>
								I&apos;m Eren Duman — a recent Management Information Systems
								graduate. I enjoy turning ideas into real, working projects.
								Whether I'm building software, working with cloud and
								infrastructure technologies, or exploring something completely
								new, I enjoy seeing progress and creating something I can be
								proud of. This portfolio is a collection of that journey.
							</p>
						</section>
						<section className='relative z-10 flex space-x-4 items-center text-sm'>
							<div>
								<p>More about me: </p>
								<div className='flex -ml-2'>
									<Link
										href='https://www.linkedin.com/in/erendumanmis/'
										target='_blank'
										rel='noreferrer'
										aria-label='linkedin'
										data-skip-splash-cursor
									>
										<LinkedinIcon className='h-9 w-9' />
									</Link>
									<Link
										href='https://github.com/erenduman-mis'
										target='_blank'
										rel='noreferrer'
										aria-label='github'
										data-skip-splash-cursor
									>
										<GithubIcon className='h-9 w-9' />
									</Link>

									<Link
										href='mailto:erenduman889@hotmail.com'
										aria-label='email'
										rel='noreferrer'
										data-skip-splash-cursor
									>
										<AtSignIcon className='h-9 w-9' />
									</Link>
								</div>
							</div>
							<div className='h-14 border-l border-gray-300' />
							<div
								className='flex flex-wrap space-x-3 space-y-1'
								data-skip-splash-cursor
							>
								<Link href='/projects'>/projects</Link>
								<Link href='/thoughts'>/thoughts</Link>
								<Link href='/stats'>/stats</Link>
							</div>
						</section>
					</div>
				</div>
			</SplashCursor>
		</main>
	);
}
