json.array!(@points) do |point|
  json.extract! point, :id, :address, :name, :latitude, :longitude
  json.url point_url(point, format: :json)
end
