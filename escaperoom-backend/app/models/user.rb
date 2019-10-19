class User < ApplicationRecord
  has_many :games
  has_many :rooms, through: :games
end
