import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom'


const PortHome = () => (
        <div>
            Inside Home
        </div>

);

const PortPortfolio = () => (
    <div>
       This is a Portfolio Page
       <div>
        <NavLink to="/portfolio/100" >Item 100</NavLink>
       </div>
       <div>
        <NavLink to="/portfolio/200" >Item 200</NavLink>
       </div>
       <div>
        <NavLink to="/portfolio/300" >Item 300</NavLink>
       </div>
    </div>

)

const PortPortfolioedit = (props) => (
    <div>
       Your are see the Item - {props.match.params.id}
    </div>

)

const PortContact = () => (
    <div>
       This is a Contact Page

    </div>

);


const PortNotFound = () => (
    <div>
        404 !!! PAge
    </div>

);


const PortHeader = () => (
        <header>
            <h1>Portfolio</h1>
            <NavLink to="/" activeClassName="is-active" exact ={true} > Home</NavLink>
            <NavLink to="/portfolio" activeClassName="is-active" > Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="is-active" > Contact</NavLink>
        </header>

);


const PortRouter= () => (
        <BrowserRouter>
            <div>
                <PortHeader />
                <Switch>
                    <Route path="/" component ={PortHome} exact ={true} />
                    <Route path="/portfolio" component ={PortPortfolio} exact ={true}  />
                    <Route path="/portfolio/:id" component ={PortPortfolioedit}  />
                    <Route path="/contact" component ={PortContact}  />
                    <Route component ={PortNotFound}  />
                </Switch>
            </div>
        </BrowserRouter>
);


ReactDOM.render(<PortRouter />, document.getElementById('app'));


