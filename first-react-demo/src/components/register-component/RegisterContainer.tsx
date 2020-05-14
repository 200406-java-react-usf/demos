import { IState } from "../../reducers";
import { registerAction } from '../../actions/register-action';
import { connect } from "react-redux";
import RegisterComponent from "./RegisterComponent";

const mapStateToProps = (state: IState) => {
    return {
        newUser: state.register.newUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);