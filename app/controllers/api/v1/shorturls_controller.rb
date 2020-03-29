class Api::V1::ShorturlsController < ApplicationController
  def index
    shorturl = ShortUrl.all.order(created_at: :desc)
    render json: shorturl    
  end

  def create
    shorturl = ShortUrl.create!(shorturl_params)
    if shorturl
      render json: shorturl
    else
      render json: shorturl.errors
    end    
  end

  def show
    if shorturl
      render json: shorturl
    else
      render json: shorturl.errors
    end    
  end

  def top
    shorturl = ShortUrl.all.order(views: :desc).first(10)
    render json: shorturl    
  end

  def update
    if shorturl
      shorturl.update_attribute(:views, shorturl.views + 1)
      render json: shorturl
    else
      render json: shorturl.errors
    end    
  end  

  private

  def shorturl_params
    params.permit(:originalURL,:shortName)
  end  

  def shorturl
    @shorturl ||= ShortUrl.find_by_shortName(params[:shortName])
  end

end
