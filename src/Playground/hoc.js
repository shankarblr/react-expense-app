
const Info =(props) => (
    <div>
        <h1>Info</h1>
        <p>Details from {props.info}</p>
    </div>
);


const WrappedComp = (Comp) => {
 return (props) => (
        <div>
            {props.isAdmin && <p> This is Admin Loggin</p>}
            <Comp {...props} />
        </div>
 );
};

const AdminInfo = WrappedComp(Info);


//ReactDOM.render(<AdminInfo isAdmin={false} info = "Mama this fun" />, document.getElementById('app'));