class ScoresController < ApplicationController

  def index 
    scores = Score.order(:time)
    render json: scores
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
