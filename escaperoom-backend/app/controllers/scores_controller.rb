class ScoresController < ApplicationController

  def index 
    render json: Score.all
  end 
  
  def create 
    score = Score.create(scores_params)
    render json: score
  end

  private

  def scores_params
    params.require(:score).permit(:time, :user_id, :game_id)
  end

end
