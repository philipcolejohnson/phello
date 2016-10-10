class ActivitiesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @activities = Card.find(params[:card_id]).activities

    respond_to do |format|
      format.json { render json: @activities, status: 200 }
    end
  end

  def create
    @activity = Card.find(params[:card_id]).activities.build(activity_params)

    if @activity.save
      respond_to do |format|
        format.json { render json: @activity, status: 201 }
      end
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:text, :user_id)
  end  
end
