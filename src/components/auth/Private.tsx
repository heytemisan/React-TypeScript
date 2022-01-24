import { Login } from "./Login";
import { ProfileProps, ageProps } from './Profile';

type PrivateProps = {
    isLoggedIn: boolean
    component:React.ComponentType<ProfileProps & ageProps>
}

export const Private = ({isLoggedIn, component:Component}:PrivateProps) => {
    if (isLoggedIn) {
        return (
            <Component name="Temisan" age={45}/>
        )
    } else {
        return (
            <Login/>
        )
    }
}