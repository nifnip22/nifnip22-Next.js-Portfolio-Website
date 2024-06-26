import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ProjectCard({ img, title, url, githuburl }: { img: string; title: string; url: string; githuburl: string }) {
	const handleButtonClick = () => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	const gitHubButtonClick = () => {
		window.open(githuburl, '_blank', 'noopener,noreferrer');
	}

	return (
		<>
			<div className='group relative w-full 2xl:w-[30%] 2xl:hover:w-[40%] h-1/4 md:h-3/5 2xl:h-4/5 bg-gray-100/30 hover:bg-gray-700 rounded-[40px] p-5 hover:outline hover:outline-gray-100 hover:outline-4 hover:outline-offset-8 duration-300 overflow-hidden'>
				<Image src={img} width={500} height={500} alt={''} loading='lazy' className='absolute inset-0 object-cover w-full h-full group-hover:opacity-60 transition duration-300' />
				<div className='absolute bottom-[-3rem] left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 w-[calc(100%-2.5rem)] transition-all duration-300 group-hover:bottom-5 text-center'>
					<h1 className='text-3xl text-gray-100 font-bold'>{title}</h1>
					<div className='mt-4 flex flex-row items-center justify-center gap-x-4'>
						<button type='button' onClick={handleButtonClick} className='px-4 py-3 bg-transparent hover:bg-gray-100 border-2 border-gray-100 rounded-lg text-gray-100 hover:text-gray-900 font-semibold transform duration-300'>
							Open on New Tab
						</button>
						<button type='button' onClick={gitHubButtonClick} className='px-4 py-3 bg-gray-900 hover:bg-gray-100 border-2 border-gray-900 hover:border-gray-100 rounded-lg text-gray-100 hover:text-gray-900 font-semibold transform duration-300'>
							<div className='flex items-center gap-x-2'>
								<GitHubIcon />
								View Source Code
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
