import LayoutComponent from '../../components/Layout';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {layoutAction} from '../../actions/List/ListActions.js';
function mapStateToProps(state) {
		return{
		};
	}
function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			layoutAction:layoutAction
		},dispatch);
	}
export default connect(mapStateToProps,mapDispatchToProps)(LayoutComponent);