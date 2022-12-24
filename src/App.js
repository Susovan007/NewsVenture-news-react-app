import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import News from './components/News.js';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter  
} from "react-router-dom";



export default class App extends Component {
  pageSize = 12;
  country = 'in';
  apiKey = process.env.REACT_APP_NEWS_API;
  state ={
    progress: 10
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        {/* <BrowserRouter> */}
          <HashRouter>    

            <Navbar/>
            <LoadingBar
              height={3}
              color='#f11946'
              progress={this.state.progress}
            />

            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country={this.country} category='general'/>} />
              <Route exact path="business/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country={this.country} category='business'/>} />
              <Route exact path="entertainment/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country={this.country} category='entertainment'/>} />
              <Route exact path="general/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country={this.country} category='general'/>} />
              <Route exact path="health/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country={this.country} category='health'/>} />
              <Route exact path="science/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country={this.country} category='science'/>} />
              <Route exact path="sports/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country={this.country} category='sports'/>} />
              <Route exact path="technology/*" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country={this.country} category='technology'/>} />
            </Routes>


          </HashRouter>  
        {/* </BrowserRouter> */}
      </div>
    )
  }
}
