import React from 'react'
import Searchbar from './Searchbar'
import ImageList from './ImageList.js';
import axios from 'axios';

class App extends React.Component 
{
    state = {images: [] }
    onSearchSubmit = async(term) =>
    {
       const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID -----------'
                /* Fill the secret key in ----------- */
                /*The secret key is achieved after launching app from unsplash as developers! */
                /*Recommended checking the ReadMe file*/ 
            }
        })
        this.setState({ images: response.data.results })
    }
    render()
    {
        return (
            <div>
                <Searchbar userSubmit={this.onSearchSubmit}/>
                <span>Found: {this.state.images.length} images </span>
                <ImageList foundImages={this.state.images}/>
            </div>
        )
    }
}
export default App;