
function App() {
    return (
        <div className='main'>
            <Pic />
            <div className='floor'>
                <Post />
                <Following />
                <Follower />
            </div>
        </div>
    )
}

function Pic() {
    return (
        <div className='pic'>
            <img style={{ border: `0px solid`, borderRadius: `50%` }} src='https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80' />
            <div className='underpic'>
                <h1 style={{ fontSize: `34px` }}>Julienne Moore</h1>
                <p style={{ fontSize: `24px`, opacity: `0.5` }}>jukianne.moore@company.com</p>
            </div>
        </div>
    )
}

function Post() {
    return (
        <div className='bottom'>
            <h1 style={{ letterSpacing: `5px` }}>25</h1>
            <h1 style={{ opacity: `0.3` }}>Post</h1>
        </div>
    )
}
function Following() {
    return (
        <div className='bottom'>
            <h1 style={{ letterSpacing: `5px` }}>350</h1>
            <h1 style={{ opacity: `0.3` }}>Following</h1>
        </div>
    )
}
function Follower() {
    return (
        <div className='bottom'>
            <h1 style={{ letterSpacing: `5px` }}>1.5K</h1>
            <h1 style={{ opacity: `0.3` }}>Follower</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)