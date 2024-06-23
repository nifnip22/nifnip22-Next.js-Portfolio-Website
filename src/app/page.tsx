import { useRef, useEffect } from 'react';
import Navbar from '@/components/Fragments/Navbar';
import Footer from '@/components/Fragments/Footer';
import MainLayout from '@/components/Layouts/MainLayout';

export default function Home() {
	return (
		<>
			<MainLayout>
				<div className='h-4/5 flex flex-row justify-between items-center gap-x-20'>
					<div className='flex flex-col space-y-8'>
						<p className='text-gray-100 text-2xl'>Hi, my name is</p>
						<h1 className='w-[410px] text-8xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-500 to-gray-100'>nifnip22</h1>
						<p className='text-gray-100 text-2xl leading-loose'>
							Junior software engineer with a strong passion for web programming. My goal is to develop into a proficient full-stack developer, equipped with a deep understanding of both frontend and backend technologies.
						</p>
					</div>
					<div className='w-3/5 h-full bg-gray-100 opacity-40 rounded-tl-[95px] rounded-br-[95px]'></div>
				</div>
			</MainLayout>
		</>
	);
}
