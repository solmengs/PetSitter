require 'byebug'

class PetsController < ApplicationController
  def index
    pets = Pet.all
    puts pets
    render json: pets
  end

  def show
      pet = Pet.find(params[:id])
      render json: pet
  end

  def create
      pet = Pet.new(params.require(:pet).permit(:name, :image, :anmial_type, :age, :owner_id))
      if pet.save
          render json: pet   
      else
        #   flash[:message] = pet.errors.full_messages
      end    
  end

  def update
      pet = Pet.find(params[:id])
      pet.update(params.require(:pet).permit(:name, :image, :anmial_type, :age, :owner_id))
      render json: pet
  end

#   def destroy
#       pet = Pet.find(params[:id])
#       pet.destroy
#       render json: {message: 'Your pet has been removed!'}
#   end

  def destroy
    @pet = Pet.find(params[:id])
    @temp = @pet
    @pet.delete
    render :json => @temp 
    # {message: 'Your pet has been removed!'}
  end
end
