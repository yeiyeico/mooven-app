class ItinerariesController < ApplicationController

  def index
    @itineraries = Itinerary.all
  end

  def create
    @itinerary = Itinerary.new(itinerary_params)

    if @itinerary.save
      render json: @itinerary
    else
      render json: @itinerary.errors, status: :unprocessable_entity
    end
  end


  private

  def itinerary_params
    params.require(:itinerary).permit(:itinerary_name, :avaliable_seats, :start_point, :end_point)
  end
  
end
