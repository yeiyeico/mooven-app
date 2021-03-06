class PointsController < ApplicationController
  require "geokit"
  before_action :set_point, only: [:show, :edit, :update, :destroy]

  # GET /points
  # GET /points.json
  def index
    @points = Point.all 
      # render json: @points
  end

  # GET /points/1
  # GET /points/1.json
  def show
  end

  # GET /points/new
  def new
    @point = Point.new
  end

  # GET /points/1/edit
  def edit
  end

  # POST /points
  # POST /points.json
  def create
    @point = Point.new(point_params)

    if @point.save
        render json: @point 
      else
        format.html { render :new }
        format.json { render json: @point.errors, status: :unprocessable_entity }
      end
end

  # PATCH/PUT /points/1
  # PATCH/PUT /points/1.json
  def update
    respond_to do |format|
      if @point.update(point_params)
        format.html { redirect_to @point, notice: 'Point was successfully updated.' }
        format.json { render :show, status: :ok, location: @point }
      else
        format.html { render :edit }
        format.json { render json: @point.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /points/1
  # DELETE /points/1.json
  def destroy
    @point.destroy
    respond_to do |format|
      format.html { redirect_to points_url, notice: 'Point was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def coordinates
    @point = Point.new
    @point.address = params[:address]
    # @point.update(point_params)
    address_field = Geokit::Geocoders::GoogleGeocoder.geocode @point.address
    @point.latitude  = address_field.lat
    @point.longitude = address_field.lng
    # renderize the value in json
    render json: @point 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point
      @point = Point.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def point_params
      params.require(:point).permit(:address, :name, :latitude, :longitude)
    end
end
