class UserSerializer < ActiveModel::Serializer #defines what should come back, might not want to send everything
  attributes :id, :name, :scores
end
