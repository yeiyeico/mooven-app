class ItinerariesController < ApplicationController
  before_action :set_itinerary, only: [:show, :edit, :update, :destroy]

  def index
    @itineraries = Itinerary.all
  end

  def show
  end

  def create
    @itinerary = Itinerary.new

    @itinerary.itinerary_name = params[:itinerary_name]
    @itinerary.avaliable_seats = params[:seats]
    @itinerary.start_point = newpoint(params[:point_a])
    @itinerary.end_point = newpoint(params[:point_b])

    if @itinerary.save
       # render json: @itinerary
    else
      render json: @itinerary.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @itinerary.destroy
    respond_to do |format|
      format.html { redirect_to itineraries_url, notice: 'Point was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
  
  def set_itinerary
    @itinerary = Itinerary.find(params[:id])
  end

  def newpoint (address)
    @point = Point.new
    @point.address = address

    address_field = Geokit::Geocoders::GoogleGeocoder.geocode @point.address
    @point.latitude  = address_field.lat
    @point.longitude = address_field.lng
    
    @point.save
    @point
  end
  
end
