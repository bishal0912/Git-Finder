import './home.css'
export default function Home({ userName, repo, followers }) {
    return (
        <div className='mainDiv'>
            {
                userName.length === 0 ? <h1 style={{ textAlign: 'center' , color:'rgb(207, 207, 207)' ,paddingTop:'30px' }}>Please Search UserName !!! </h1> : <h1 style={{ textAlign: 'center' , margin: '15px' , color:'#3081f7',paddingTop:'30px' }}>{userName}</h1>
            }
            {
                followers.length === 0 ? <></> : <h2 style={{ margin: '35px' , fontWeight:'500' , paddingLeft:'20px' , color:'green'}}>Followers: {followers}</h2>
            }
            {
                repo.length === 0 ? <></> : <><h1 style={{ textAlign: 'center', margin: '20px' , borderBottom: '0.5px solid white' , paddingBottom:'20px'}}>Repositories</h1><br /></>
            }
            {
                repo.map((i) => {
                    return <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '50px' }}>
                            <h3>{i.name}</h3>
                            <a href={`https://github.com/${userName}/${i.name}`} target='blank'>
                                <button className='button-repo'>Click To Go To Repo</button>
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
    )
}