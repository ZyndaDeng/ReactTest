
///<reference path="../node_modules/@types/react/index.d.ts" />
///<reference path="../node_modules/@types/react-dom/index.d.ts" />

interface IAppProps {

}

interface IAppState{

}

class App extends React.Component<IAppProps,IAppState>{
    render():JSX.Element{
        return(
            <div>
                Hello world
                </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('main'))