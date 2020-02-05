class UsersController < ApplicationController

  def index 
    render json: User.all
  end 

  def create 
    user = User.create(user_params)
    if user.valid?
      render json: { user: UserSerializer.new(user) }, status: :created
    else 
      render json: { errors: { error_obj: user.errors.messages, full_messages: user.errors.full_messages} }, status: :not_acceptable
    end 
   end 

private 

  def user_params 
    params.require(:user).permit(:name)
  end 

end
