import Card from '@/components/Fragments/Card';
import MainLayout from '@/components/Layouts/MainLayout';

export default function About() {
	return (
		<>
			<MainLayout>
				<div className='h-4/5 flex flex-col justify-start gap-y-20'>
					<h1 className='w-[490px] text-8xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-slate-500 to-gray-100'>About Me</h1>
					<div className='h-full flex flex-wrap gap-x-20'>
						<Card title='When you start to learn Programming?' subtitle='I started learning web programming since I was in vocational school on 2021' />
						<Card title='What are you skills and expertise?' subtitle={
                            <div className='flex flex-row items-center justify-center gap-x-2'>
                                
                            </div>
                        } />
                    </div>                
				</div>
			</MainLayout>
		</>
	);
}
