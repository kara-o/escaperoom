class User < ApplicationRecord
  has_many :scores

  validates :name, presence: true

  def games_played
    self.scores.each_with_index do |score, index|
      puts "#{index + 1}. #{score.game.name}: #{score.time} seconds"
    end
  end
  

end
