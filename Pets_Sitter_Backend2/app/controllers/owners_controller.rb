class OwnersController < ApplicationController
  
  def index
    owners = Owner.all
    render json: owners
  end
  
  def show
    owner = Owner.find_by(name: params[:id])
    render :json =>  owners
  end 

  def create 
      owner = Owner.find_or_create_by(params.require(:owner).permit(:name, :address, :user_image, :background_image))
      if owner.save
          render :json =>  owner
      else
          flash[:message]=owner.errors.full_messages
      end
  end 

end
