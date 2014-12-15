json.array!(@itineraries) do |itinerary|
  json.extract! itinerary, :id, :itinerary_name, :avaliable_seats

  if itinerary.start_point
    json.start_point do
    json.id itinerary.start_point.id
    json.address itinerary.start_point.address
    json.name itinerary.start_point.name
    json.longitude itinerary.start_point.longitude
    json.latitude itinerary.start_point.latitude
    end
  end

  if itinerary.end_point
    json.end_point do
      json.id itinerary.end_point.id
      json.address itinerary.end_point.address
      json.name itinerary.end_point.name
      json.longitude itinerary.end_point.longitude
      json.latitude itinerary.end_point.latitude
    end
  end
  json.url itinerary_url(itinerary, format: :json)
end
