import MainLayout from '@/components/Layouts/MainLayout';

export default function Projects() {
	return (
		<>
			<MainLayout>
				<div className='h-4/5 flex flex-col justify-start gap-y-20'>
					<h1 className='2xl:w-[590px] h-[160px] text-7xl sm:text-8xl text-center 2xl:text-start font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-500 to-gray-100'>My Projects</h1>
					<div className='h-full flex flex-nowrap gap-x-20'>

                    </div>
				</div>
			</MainLayout>
		</>
	);
}
