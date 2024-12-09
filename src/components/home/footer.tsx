export default function Footer() {
    return (
        <footer className="bg-gray-900 bg-opacity-90 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.23 12.11C22.23 11.27 22.16 10.47 22.05 9.7H12v4.67h5.59c-.25 1.16-1.05 2.13-2.26 2.55v2.13h3.63c2.12-1.96 3.48-4.84 3.48-8.24zM12 10.24c-1.48 0-2.68 1.21-2.68 2.68s1.21 2.68 2.68 2.68 2.68-1.21 2.68-2.68-1.21-2.68-2.68-2.68zM12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4-10h-2v6h2v-6zm-4 0H8v6h2v-6zm-2 8h2v-2H8v2z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm1 8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                        </svg>
                    </a>
                </div>
                <div className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
                <div className="flex items-center text-gray-400 text-sm space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 10-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8zm-1-8h2v2h-2zm0-4h2v2h-2z"/>
                    </svg>
                    <span>Registered Trademark</span>
                </div>
            </div>
        </footer>
    );
}
