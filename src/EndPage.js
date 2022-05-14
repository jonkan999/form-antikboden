import React from 'react';
import formpic from './firstpage-pic.png';
import './EndPage.css';

let website_url='http://www.antikboden.net/';
let ig_url='https://www.instagram.com/antikboden/?hl=en'
let fb_url='https://www.facebook.com/Antikboden'

export default class EndPage extends React.Component {
    state = {
        open: false
    }
    render() {
        return (
        <div className="main-div" >
        <img src={formpic} className="formpic"/>
        <h1>Tack! Vi ser till att hålla kontakten.</h1>
        <h1>Kom gärna och besök oss <a style={{ color: "hotpink"}} href={website_url} target="_blank" title="Opens in a new window">online</a> eller i vår butik på Störtloppsvägen 27-29 i Västertorp, och följ oss på social medier:</h1>
        <div className="some-icons">
            <span>
                <a  href={fb_url} target="_blank" title="Opens in a new window"><i class="fa fa-facebook-square" ></i></a>
            </span>
            <span>
                <a  href={ig_url} target="_blank" title="Opens in a new window"><i class="fa fa-instagram" ></i></a>
            </span>

        </div>
      </div>
    );
  }
}