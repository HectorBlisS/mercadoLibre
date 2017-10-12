import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MisAnunciosDisplay} from './MisAnunciosDisplay';

function mapStateToProps(state, ownProps) {
    //console.log(state.user.ads.length !== 0);
    return {
        ads: state.user.ads,
        fetched: state.user.ads.length !== 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const MisAnuncios = connect(mapStateToProps, mapDispatchToProps)(MisAnunciosDisplay);