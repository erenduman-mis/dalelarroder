interface ProjectProps {
	title: string;
	url?: string;
	category: string;
}

export default function ProjectItem({ title, url, category }: ProjectProps) {
	const content = (
		<>
			<h2 className='text-xl font-medium sm:text-3xl'>{title}</h2>

			<p className='text-xs text-neutral-400 sm:text-base'>{category}</p>
		</>
	);

	if (!url) {
		return (
			<div className='flex w-full items-center justify-between border-b border-neutral-800 px-4 py-8 sm:px-10'>
				{content}
			</div>
		);
	}

	return (
		<a
			href={url}
			target='_blank'
			rel='noreferrer'
			className='flex w-full items-center justify-between border-b border-neutral-800 px-4 py-8 transition-colors hover:bg-white/5 sm:px-10'
		>
			{content}
		</a>
	);
}
