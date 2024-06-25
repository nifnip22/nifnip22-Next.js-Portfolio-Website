import Navbar from '@/components/Fragments/Navbar';
import Footer from '@/components/Fragments/Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='px-10 py-12 lg:px-24 lg:py-16 w-full h-[2000px] lg:h-[1500px] 2xl:h-screen flex flex-col justify-between'>
				<Navbar />
                    {children}
				<Footer />
			</div>
		</>
	);
}
