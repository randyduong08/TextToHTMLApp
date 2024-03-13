export default function Page(){
    return(
        <div className='github-info absolute inset-y-0 right-10'> {/* Apply margin to the outside of the card */}
            <div className="bg-transparent border border-white shadow-md rounded-lg p-6 text-white">
                <h3 className="mb-10">GitHub</h3> {/* Add margin to the bottom */}
                <a href="https://github.com/" target="_blank"><img src="/github_logo.svg"></img></a>
            </div>
        </div>
    )
}
