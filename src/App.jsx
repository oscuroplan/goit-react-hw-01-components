// главный компонент

import Profile from './components/Profile/Profile'
import user from '././data/user.json';
import Statistics from './components/Statistics/Statistics';
import data from '././data/data.json'


export default function App() {
    return <div>
        <Profile
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
<Statistics title="Upload stats" stats={data} />
    </div>
}