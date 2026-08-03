'use client';

import { motion, useReducedMotion } from 'motion/react';
import { projects } from './constants';
import ProjectItem from './project-item';

export default function Projects() {
	const prefersReducedMotion = useReducedMotion();

	return (
		<>
			{projects.map((project, index) => (
				<motion.div
					key={project.title}
					initial={{
						scale: prefersReducedMotion ? 1 : 0.95,
						opacity: 0,
					}}
					animate={{
						scale: 1,
						opacity: 1,
					}}
					transition={{
						duration: prefersReducedMotion ? 0.2 : 0.4,
						delay: prefersReducedMotion ? 0 : index * 0.05,
					}}
				>
					<ProjectItem
						title={project.title}
						url={project.url}
						category={project.category}
					/>
				</motion.div>
			))}
		</>
	);
}
