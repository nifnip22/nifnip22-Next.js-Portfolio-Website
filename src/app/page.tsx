'use client';
import MainLayout from '@/components/Layouts/MainLayout';
import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';
import React, { createContext } from 'react';

const MyContext = createContext<any>(null);

export default function Home() {
	return (
		<>
			<MainLayout>
				<div className='h-4/5 flex flex-col 2xl:flex-row justify-between items-center gap-x-20 gap-y-20'>
					<motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95) }} className='flex flex-col space-y-8'>
						<p className='text-gray-100 text-2xl'>Hi, my name is</p>
						<h1 className='w-[665px] text-8xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-500 to-gray-100'>Hanif Ahmad</h1>
						<p className='text-gray-100 text-2xl leading-loose'>
							<b>Junior software engineer</b> with a strong passion for <b>web programming</b>. My goal is to develop into a proficient <b>full-stack developer</b>, equipped with a deep understanding of both{' '}
							<b>frontend and backend technologies</b>.
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95), delay: 0.2 }}
						className='relative w-3/5 h-full bg-gray-100/30 rounded-tl-[95px] rounded-br-[95px] overflow-hidden '>
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: cubicBezier(0.37, 0.01, 0.25, 0.95), delay: 0.6 }}>
							<Image src='/profile.jpg' width={500} height={500} alt='' className='absolute inset-0 w-full h-full object-cover hover:scale-110 transition duration-300' draggable='false' />
						</motion.div>
					</motion.div>
				</div>
			</MainLayout>
		</>
	);
}
