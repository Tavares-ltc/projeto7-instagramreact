import ReactDOM from 'react-dom'
import NavBar from './navbar'
import SideBar from './sidebar'
import Stories from './stories'
import Posts from './posts'
import FundoMobile from './fundomobile'
function App() {
    return (
        <div>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
            <SideBar />
            </div>
            <FundoMobile />
        </div>
    )
}


ReactDOM.render(<App />, document.querySelector('.root'))