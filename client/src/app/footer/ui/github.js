export default function Page(){
    return(
        <div className='github-info absolute inset-y-0 bottom-0 right-60'>
            <div className="mt-3 mb-3 bg-transparent border border-white shadow-md rounded-lg p-6 text-white" style={{ width: '200px', height: '190px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h3 className="mb-2">GitHub</h3>
                <a href="https://github.com/" target="_blank"><img src="/github_logo.svg" alt="GitHub Logo" className="w-10 h-10"></img></a>
            </div>
        </div>
    )
}
