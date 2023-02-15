import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component{
    constructor(){
        super();
        this.state = {
            articles : [],
            page: 1,
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=48c198369a54400eaa580101c9e26798&page=1";
        let data  = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handlePrevStep=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=48c198369a54400eaa580101c9e26798&page=${ this.state.page - 1}&pageSize=20`;
        let data  = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page : this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextStep = async()=>{
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/20)){}
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=48c198369a54400eaa580101c9e26798&page=${ this.state.page + 1}&pageSize=20`;
            let data  = await fetch(url);
            let parsedData = await data.json();
            this.setState({
            page : this.state.page + 1,
            articles: parsedData.articles
        })
        }    
    }
    render(){
        return(
            <div className="container my-2">
                <h3>NewsMonkey - Headlines</h3>
                <div className="row" >
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}> 
                        <NewsItems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl= {element.urlToImage} newsUrl = {element.url}/>
                    </div>
                    })}
                </div> 
                <div className="container d-flex justify-content-between my-2">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevStep}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextStep}>Next &rarr;</button>
                </div> 
            </div>
        )
    }
}

export default News