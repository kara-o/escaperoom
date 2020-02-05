class ScoresController < ApplicationController

  def index 
    scores = Score.order(:time)
    numeral_scores = scores.filter {|score| score.time != 0}
    lost_scores = scores.filter {|score| score.time == 0}
    scores = numeral_scores + lost_scores
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
