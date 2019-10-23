class UsersController < ApplicationController

 def create 
  
  user = User.create(user_params)
  # byebug
  render json: user
 end 

  def index 
    render json: User.all
  end 

private 

  def user_params 
    params.require(:user).permit(:name)
  end 

end
