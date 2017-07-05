import SampleComponent from '../../components/Sample';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {sampleAction} from '../../actions/Sample/SampleActions.js';
function mapStateToProps(state) {
		return{
		};
	}
function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			sampleAction:sampleAction
		},dispatch);
	}
export default connect(mapStateToProps,mapDispatchToProps)(SampleComponent);