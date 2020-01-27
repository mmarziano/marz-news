import React from 'react';
import './App.css';
import './css/loading.css';
import App from './App'
import { connect } from 'react-redux'
import Loading from './components/Loading'
import { fetchTopHeadlines } from "./actions/articleActions";



class AppContainer extends React.Component {
    componentDidMount() {
        this.props.fetchTopHeadlines();
    }
    

    render() {
            const { error, loading, topHeadlines} = this.props;

            if (error) {
                return <div>Error! {error.message}</div>;
                }

            if (loading && topHeadlines === null) {
              return (<Loading />)
            }

              return (
                <App topHeadlines={this.props.topHeadlines}/>
              );
        }
    }

    const mapStateToProps = state => {
        return {
            topHeadlines: state.topHeadlines.topHeadlines,
        }
    }

    const mapDispatchToProps = (dispatch) => {
        return  {
          fetchTopHeadlines: () => dispatch(fetchTopHeadlines()),
          }
        };
 
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)

