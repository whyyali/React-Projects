import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

                        <div className="md:col-span-4 lg:col-span-5">
                            <div className="mb-2">

                                <Link to="/" className="inline-block" aria-label="">
                                    <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="text-gray-400">Our company specializes in providing top-notch services and solutions to meet your needs, ensuring the highest level of satisfaction.</div>
                        </div>

                        <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                                <ul>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Best Practices</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Design Guidelines</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Developer Tools</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">User Manuals</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Support Articles</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-sm">
                                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                                <ul>
                                <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">About Us</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Careers</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Contact Us</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Privacy Policy</Link>
                                    </li>
                                    <li className="mb-1">
                                        <Link to="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Terms of Service</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col gap-1 items-center justify-center">

                        <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                            <li>
                                <Link to="/" className="flex h-8 w-8 justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                                    <FaTwitter className='h-4 w-4 fill-current' />
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="/" className="flex h-8 w-8 justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                                    <FaGithub className='h-4 w-4 fill-current' />
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link href="/" className="flex h-8 w-8 justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                                    <FaFacebookF className='h-4 w-4 fill-current' />
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="/" className="flex h-8 w-8 justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                                    <FaInstagram className='h-4 w-4 fill-current' />
                                </Link>
                            </li>
                            <li className="ml-4">
                                <Link to="/" className="flex h-8 w-8 justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                                    <FaLinkedinIn className='h-4 w-4 fill-current' />
                                </Link>
                            </li>
                        </ul>

                        <div className="text-gray-400 text-center text-sm mb-2">&copy; 2024. All rights reserved.</div>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer