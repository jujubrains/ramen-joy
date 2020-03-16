import React from 'react';
import SearchBar from './SeachBar';
import youtube, {baseParams} from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import "../style/Vids.css";


class Vids extends React.Component{
    state = {videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('making ramen');
    }

    onTermSubmit = async term => {
       const response = await youtube.get('/search', {
            params: {
                ...baseParams,
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({selectedVideo: video});
    };

    render(){
        return (
            <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                </div>
            
            </div>
        </div>
        );
    }
}


export default Vids;