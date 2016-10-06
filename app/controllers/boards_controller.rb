class BoardsController < ApplicationController
  
  def index
    @boards = current_user.boards

    respond_to do |format|
      format.json { render json: @boards, status: 200 }
    end
  end

  def create
    @board = current_user.boards.build(board_params)

    if @board.save
      respond_to do |format|
        format.json { render json: @board, status: 201 }
      end
    end
  end

  private

  def board_params
    params.require(:board).permit(:name)
  end

end
