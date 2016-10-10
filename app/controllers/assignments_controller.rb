class AssignmentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @user = User.find(params[:assignment][:user_id])
    @card = Card.find(params[:assignment][:card_id])

    if @user.tasks << @card
      respond_to do |format|
        format.json { render json: @user, status: 201 }
      end
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @card = @user.tasks.find(params[:card_id])

    if @user.tasks.delete(@card)
      respond_to do |format|
        format.json { render json: @user, status: 200 }
      end
    end
  end

  private

  def assignment_params
    params.require(:assignment).permit(:card_id, :user_id)
  end
end
