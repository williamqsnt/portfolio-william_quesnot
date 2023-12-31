import Image from "next/image";

export default function Footer() {
    const today = new Date();

    const pages = [
        { title: "About", link: "/about" },
        { title: "Works", link: "/works" },
        { title: "Notes", link: "/notes" },
        { title: "Contact", link: "/blogs" }
    ];

    return (
        <footer className="bg-blue-custom text-white py-10">
            <div className="container mx-auto text-center lg:flex lg:justify-between lg:items-center">
                <div className="text-xl font-bold">
                    <a href="/" className="text-lightblue-custom">
                        PORTFOLIO
                    </a>
                    <p className="font-light text-sm text-lightblue-custom">The ability to bring your imagination <br /> to life is what makes a good developer. </p>
                </div>
                <div className="lg:flex space-x-10 items-center py-5">
                    <div className="text-white text-sm text-center lg:text-left">
                        <div className="mb-4 uppercase font-bold hidden lg:block text-gray-900">Pages</div> {/* Masquer sur les petits écrans */}
                        <ul className="list-inside">
                            {pages.map((page, index) => (
                                <li key={index}>
                                    <a href={page.link} className="text-white transition duration-300 ease-in-out">
                                        {page.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:flex lg:flex-col items-center">
                        <div className="text-lightblue-custom text-sm uppercase font-bold mb-2 hidden lg:block">Social</div> {/* Masquer sur les petits écrans */}
                        <div className="flex items-center justify-center lg:justify-start">
                            <a href="https://github.com/williamqsnt" target="_blank" className=" transition duration-300 ease-in-out hidden lg:block">
                                <Image src="/github.svg" width={30} height={30} alt="GitHub" className="mr-4" />
                            </a>
                            <a href="https://www.linkedin.com/in/william-quesnot/" target="_blank" className="text-gray-900 transition duration-300 ease-in-out hidden lg:block">
                                <Image src="/linkedin.svg" width={30} height={30} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center text-xs opacity-70 text-gray-900">
                <p>&copy;{today.getFullYear()} William Quesnot</p>
            </div>
        </footer>
    );
}
