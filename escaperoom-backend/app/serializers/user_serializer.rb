class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :scores

  # def sorted_scores
  #   sorted_scores = Score.where(user_id: self.object.id).order(created_at: :desc)
  #   byebug
  # end

end
