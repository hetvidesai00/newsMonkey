import React, { Component } from 'react'

export class NewsItems extends Component {
    render(){
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    {/* style is first convert to js by curly brackets and then to obj again by curly brackets for obj  */}
                <img src={imageUrl?imageUrl:"https://gumlet.assettype.com/bloombergquint%2F2022-09%2F09f078e3-3465-40cc-8677-a154a1562c0b%2FA_finanical_analysit_analysit_stock_data___Sorce_freepik_.jpg?rect=0%2C0%2C7887%2C4141&w=1200&auto=format%2Ccompress&ogImage=true"} className="card-img-top" alt="..."/>
                {/* If imageurl is not null then pass the image as of api but if it is null then pass the default api given above  */}
                <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
          </div>
        )
    }
}

export default NewsItems