class CardsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @cards = List.find(params[:list_id]).cards

    respond_to do |format|
      format.json { render json: @cards, status: 200 }
    end
  end

  def create
    @card = List.find(params[:card][:list_id]).cards.build(card_params)

    if @card.save
      respond_to do |format|
        format.json { render json: @card, status: 201 }
      end
    end
  end

  def update
    @card = Card.find(params[:card_id])

    if @card.update(card_params)
      respond_to do |format|
        format.json { render json: @card, status: 201 }
      end
    end
  end

  def destroy
    @card = List.find(params[:list_id]).cards.find(params[:id])

    if @card.destroy
      respond_to do |format|
        format.json { render json: @card, status: 200 }
      end
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :list_id, :completed)
  end
end
