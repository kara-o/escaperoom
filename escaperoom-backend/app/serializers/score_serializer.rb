class ScoreSerializer < ActiveModel::Serializer
  attributes :time, :user, :created_at

  def user
    User.find(self.object.user_id).name
  end
end
