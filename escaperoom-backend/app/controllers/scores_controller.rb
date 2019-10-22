class ScoresController < ApplicationController

  def index 
    render json: Score.all
  end 
  
end
