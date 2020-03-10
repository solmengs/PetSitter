class NotesController < ApplicationController
  def index
    notes = Note.all
    render json: notes
  end

  def show
      note = Note.where(note_id: params[:id])
      render json: note
  end

  def create
      note = Note.new(params.require(:note).permit(:description, :catagory, :priority, :pet_id))
      if Note.save
          render json: note   
      else
          flash[:message] = note.errors.full_messages
      end    
  end

  def update
      note = Note.find(params[:id])
      note.update(params.require(:note).permit(:description, :catagory, :priority, :pet_id))
      render json: note
  end

  def destroy
      note = Note.find(params[:id])
      note.destroy
      render json: {message: 'Note has been removed!'}
  end
end
