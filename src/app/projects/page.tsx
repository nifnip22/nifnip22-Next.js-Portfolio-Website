'use client';
import ProjectCard from '@/components/Fragments/ProjectCard';
import MainLayout from '@/components/Layouts/MainLayout';
import { motion, cubicBezier } from 'framer-motion';

export default function Projects() {
	return (
		<>
			<MainLayout>
				<div className='h-4/5 flex flex-col justify-start gap-y-20'>
					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95) }}
						className='2xl:w-[590px] h-[160px] text-7xl sm:text-8xl text-center 2xl:text-start font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-500 to-gray-100'>
						My Projects
					</motion.h1>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95), delay: 0.3 }}
						className='h-full flex flex-col 2xl:flex-row gap-x-20 gap-y-20'>
						<ProjectCard />
					</motion.div>
				</div>
			</MainLayout>
		</>
	);
}
