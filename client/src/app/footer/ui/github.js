export default function Page() {
    return (
        <div className="mr-40 pr-40 absolute bottom-10 right-40"> {/* Apply margin to the outside of the card */}
            <div className="bg-transparent border border-white shadow-md rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">GitHub</h3>
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0"> {/* Container for the image */}
                        <a href="https://github.com/" target="_blank">
                            <img src="/github_logo.svg" alt="GitHub Logo" className="w-10 h-10" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
