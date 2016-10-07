class ListsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @lists = current_user.boards.find(params[:board_id]).lists

    respond_to do |format|
      format.json { render json: @lists.to_json(include: [:cards]), status: 200 }
    end
  end

  def create
    @list = current_user.boards.find(params[:list][:board_id]).lists.build(list_params)

    if @list.save
      respond_to do |format|
        format.json { render json: @list, status: 201 }
      end
    end
  end

  def update
    @list = List.find(params[:list_id])

    if @list.update(list_params)
      respond_to do |format|
        format.json { render json: @list, status: 201 }
      end
    end
  end

  def destroy
    @list = current_user.boards.find(params[:board_id]).lists.find(params[:id])

    if @list.destroy
      respond_to do |format|
        format.json { render json: @list, status: 200 }
      end
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :description, :board_id)
  end
end
