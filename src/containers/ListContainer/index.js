import ListComponent from '../../components/ListComponent';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchListData} from '../../actions/List/ListActions.js';
function mapStateToProps(state) {
		return{
			listData:state.Listreducer.listData
		};
	}
function mapDispatchToProps(dispatch) {
		return bindActionCreators({
			fetchListData:fetchListData
		},dispatch);
	}
export default connect(mapStateToProps,mapDispatchToProps)(ListComponent);