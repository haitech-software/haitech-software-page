import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, MenuIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex top-0 min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="hidden md:flex mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden md:max-w-2xl lg:max-w-5xl">
                    <nav className="flex  items-center justify-start gap-4">
                        <a
                            href="#"
                            className="inline-block font-bold rounded-sm border border-transparent px-6 py-1.5 text-sm leading-normal text-[#1b1b18] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            HaiTech
                        </a>
                    </nav>
                    <nav className="flex w-full items-center justify-end gap-4">
                        <a
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-6 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Beranda
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-6 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Profil
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-6 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Portofolio
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-sm border border-transparent px-6 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            Projek
                        </a>
                        <a
                            href="#"
                            className="inline-block rounded-sm border border-[#19140071] px-6 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] hover:bg-[#1915014a] hover:text-[#161616] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Hubungi Kami
                        </a>
                    </nav>
                </header>

                <header className="flex justify-between mb-6 w-full max-w-[435px] md:max-w-[635px] text-sm not-has-[nav]:hidden lg:max-w-5xl md:hidden">
                    <nav className="flex  items-center justify-start gap-4">
                        <a
                            href="#"
                            className="inline-block font-bold rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] dark:text-[#EDEDEC]"
                        >
                            HaiTech
                        </a>
                    </nav>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 dark:text-white">
                                <MenuIcon className="w-6 h-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 p-6">
                            <nav className="flex flex-col gap-2 mt-4">
                                <SheetClose asChild className='hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:rounded-sm '>
                                    <Link href="/" className='py-2 px-5'>Beranda</Link>
                                </SheetClose>
                                <Separator orientation="horizontal" />
                                <SheetClose asChild className='hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:rounded-sm '>
                                    <Link href="/about" className='py-2 px-5'>Profil</Link>
                                </SheetClose>
                                <Separator orientation="horizontal" />
                                <SheetClose asChild className='hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:rounded-sm '>
                                    <Link href="/contact" className='py-2 px-5'>Portofolio</Link>
                                </SheetClose>
                                <Separator orientation="horizontal" />
                                <SheetClose asChild className='hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:rounded-sm '>
                                    <Link href="/contact" className='py-2 px-5'>Projek</Link>
                                </SheetClose>
                                <Separator orientation="horizontal" />
                                <SheetClose asChild className='hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:rounded-sm '>
                                    <Link href="/contact" className='py-2 px-5'>Hubungi Kami</Link>
                                </SheetClose>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </header>

                <div className='mb-12 mt-10'>
                    <h1 className='text-center max-w-[435px] md:max-w-[635px] lg:max-w-4xl font-semibold text-white text-[3rem] leading-12 mb-4'>Lorem ipsum dolor sit, amet conse</h1>
                    <h1 className='text-center max-w-[435px] md:max-w-[635px] lg:max-w-4xl text-white'>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, maiores.</h1>
                </div>

                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[435px] md:max-w-[635px] flex-col lg:max-w-5xl">
                        <div className='translate-x-3 relative max-h-[210px] md:max-h-[410px] lg:max-h-[690px] lg:overflow-hidden'>
                            {/* Laptop */}
                            <div className='md:scale-110 lg:scale-150 lg:mt-28'>
                                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-gray-800">
                                        <img
                                            src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png"
                                            className="w-full h-full rounded-lg object-cover"
                                            alt="Laptop Screen"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='scale-[0.3] md:scale-[0.5] lg:scale-[0.7] origin-top -translate-y-40 -translate-x-36 md:-translate-x-64 md:-translate-y-60 lg:-translate-x-96'>
                                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                                    <div className="w-[148px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                    <div className="h-[46px] w-[3px] bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                    <div className="h-[64px] w-[3px] bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
                                        <img
                                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
                                            className="w-[272px] h-[572px] object-cover"
                                            alt="Phone Screen"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full p-6'>
                            <div className='mb-10 mt-10 text-start'>
                                <h1 className='max-w-[435px] md:max-w-[635px] lg:max-w-4xl font-semibold text-white text-5xl leading-12'>Kenali HaiTech lebih dalam.</h1>
                            </div>

                        </div>

                        <div className='w-full p-6'>
                            <div className='mb-10 mt-10 text-start'>
                                <h1 className='max-w-[435px] md:max-w-[635px] lg:max-w-4xl font-semibold text-white text-5xl leading-12'>Our Jobs.</h1>
                            </div>
                            <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div className='relative border p-1 rounded-3xl transform transition duration-300 ease-in-out hover:scale-105'>
                                    <AspectRatio>
                                        <img
                                            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                                            alt="image"
                                            className='rounded-2xl w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-90'
                                            style={{
                                                filter: 'brightness(0.8)',
                                            }}
                                        />
                                    </AspectRatio>
                                    <Button
                                        className='absolute top-4 right-4 shadow-black transition duration-300 ease-in-out'
                                        size={'sm'}
                                    >
                                        <ArrowUpRight />
                                    </Button>
                                    <h1 className='absolute bottom-4 left-4 text-white font-bold text-4xl tracking-tight transition duration-300 ease-in-out'>
                                        Web Developer
                                    </h1>
                                </div>
                                <div className='relative border p-1 rounded-3xl transform transition duration-300 ease-in-out hover:scale-105'>
                                    <AspectRatio>
                                        <img
                                            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                                            alt="image"
                                            className='rounded-2xl w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-90'
                                            style={{
                                                filter: 'brightness(0.8)',
                                            }}
                                        />
                                    </AspectRatio>
                                    <Button
                                        className='absolute top-4 right-4 shadow-black transition duration-300 ease-in-out'
                                        size={'sm'}
                                    >
                                        <ArrowUpRight />
                                    </Button>
                                    <h1 className='absolute bottom-4 left-4 text-white font-bold text-4xl tracking-tight transition duration-300 ease-in-out'>
                                        UI UX Desainer
                                    </h1>
                                </div>
                                <div className='relative border p-1 rounded-3xl transform transition duration-300 ease-in-out hover:scale-105'>
                                    <AspectRatio>
                                        <img
                                            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                                            alt="image"
                                            className='rounded-2xl w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-90'
                                            style={{
                                                filter: 'brightness(0.8)',
                                            }}
                                        />
                                    </AspectRatio>
                                    <Button
                                        className='absolute top-4 right-4 shadow-black transition duration-300 ease-in-out'
                                        size={'sm'}
                                    >
                                        <ArrowUpRight />
                                    </Button>
                                    <h1 className='absolute bottom-4 left-4 text-white font-bold text-4xl tracking-tight transition duration-300 ease-in-out'>
                                        Frontend Developer
                                    </h1>
                                </div>
                                <div className='relative border p-1 rounded-3xl transform transition duration-300 ease-in-out hover:scale-105'>
                                    <AspectRatio>
                                        <img
                                            src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                                            alt="image"
                                            className='rounded-2xl w-full h-full object-cover transition duration-300 ease-in-out hover:brightness-90'
                                            style={{
                                                filter: 'brightness(0.8)',
                                            }}
                                        />
                                    </AspectRatio>
                                    <Button
                                        className='absolute top-4 right-4 shadow-black transition duration-300 ease-in-out'
                                        size={'sm'}
                                    >
                                        <ArrowUpRight />
                                    </Button>
                                    <h1 className='absolute bottom-4 left-4 text-white font-bold text-4xl tracking-tight transition duration-300 ease-in-out'>
                                        Desain Grafis
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

            </div>
        </>
    );
}
